import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { router, protectedProcedure } from '../context';

export const noteRouter = router({
  get: protectedProcedure
    .input(z.object({ order: z.enum(['desc', 'asc']) }))
    .mutation(async ({ ctx, input: { order } }) => {
      try {
        const notes = await ctx.prisma.note.findMany({
          where: { userId: ctx.session.user.id },
          orderBy: { createdAt: order },
          select: { title: true, content: true }
        });
        return notes;
      } catch (error) {
        console.error(error);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
      }
    }),
  create: protectedProcedure
    .input(z.object({ title: z.string().max(200), content: z.string().max(200) }))
    .mutation(async ({ ctx, input: { title, content } }) => {
      try {
        const note = await ctx.prisma.note.create({
          data: { title, content, userId: ctx.session.user.id ?? '' },
        });
        return note;
      } catch (error) {
        console.error(error);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
      }
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input: { id } }) => {
      try {
        const deletedNote = await ctx.prisma.note.delete({ where: { id } });
        return deletedNote;
      } catch (error) {
        console.error(error);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
      }
    }),
});
