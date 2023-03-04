import { z } from "zod";
import { procedure, router } from "../trpc";

export const noteRouter = router({
  allNote: procedure.query(({ ctx }) => {
    return ctx.note.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
  addNote: procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const note = await ctx.note.create({
        data: input,
      });
      return note;
    }),
    updateNote: procedure
    .input(
        z.object({
            id: z.string(),
            title: z.string(),
            content: z.string(),
            userId: z.string(),
        })
    )
    .mutation(async ({ input, ctx }) => {
        const note = await ctx.note.update({
            where: {
                id: input.id,
            },
            data: input,
        });
        return note;
    }),
    deleteNote: procedure
    .input(
        z.object({
            id: z.string(),
        })
    )
    .mutation(async ({ input, ctx }) => {
        const note = await ctx.note.delete({
            where: {
                id: input.id,
            },
        });
        return note;
    }),
});

// export type definition of API
export type NoteRouter = typeof noteRouter;
