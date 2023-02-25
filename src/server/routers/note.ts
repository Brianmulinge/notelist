import { z } from 'zod';
import { baseProcedure, router } from '../trpc';

export const noteRouter = router({
  all: baseProcedure.query(({ ctx }) => {
    return ctx.note.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }),
  add: baseProcedure
  .input(
    z.object({
      id: z.string().optional(),
      title: z.string().min(1),
      content: z.string().min(1),
      userId: z.string().uuid(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const note = await ctx.note.create({
      data: {
        title: input.title,
        content: input.content,
        user: { connect: { id: input.userId } },
      },
    });
    return note;
  }),
  
  edit: baseProcedure
  .input(
    z.object({
      id: z.string().uuid(),
      data: z.object({
        title: z.string().min(1).optional(),
        content: z.string().min(1).optional(),
        userId: z.string().uuid().optional(),
      }),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const { id } = input;
    const { title, content, userId } = input.data;
    const note = await ctx.note.update({
      where: { id },
      data: {
        // Update existing fields
        title: title,
        content: content,
        // Update new fields
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });
    return note;
  }),


});
