import { z } from 'zod';
import { baseProcedure, router } from '../trpc';

export const noteRouter = router({
  all: baseProcedure.query(({ ctx }) => {
    const userId = ctx.session.userId; // assume user ID is stored in session
    return ctx.task.findMany({
      where: { userId },
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
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.userId; // assume user ID is stored in session
      const note = await ctx.task.create({
        data: {
          title: input.title,
          content: input.content,
          userId,
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
          completed: z.boolean().optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      const userId = ctx.session.userId; // assume user ID is stored in session
      const note = await ctx.task.update({
        where: { id, userId },
        data,
      });
      return note;
    }),
  delete: baseProcedure
    .input(z.string().uuid())
    .mutation(async ({ ctx, input: id }) => {
      const userId = ctx.session.userId; // assume user ID is stored in session
      await ctx.task.delete({ where: { id, userId } });
      return id;
    }),
  clearCompleted: baseProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.userId; // assume user ID is stored in session
    await ctx.task.deleteMany({ where: { completed: true, userId } });

    return ctx.task.findMany({ where: { userId } });
  }),
});
