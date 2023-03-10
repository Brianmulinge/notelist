import { z } from "zod";
import { protectedProcedure, router } from "../trpc";


export const noteRouter = router({
  getNote: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id; // Get the userId from the session
    const notes = await ctx.prisma.note.findMany({
      where: {
        userId, // Only retrieve notes belonging to the authenticated user
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return notes;
  }),

  addNote: protectedProcedure
  .input(
    z.object({
      title: z.string(),
      content: z.string(
        z.string().min(1, "Content must be at least 1 character long").max(5000, "Content must be at most 5000 characters long")
      ),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const  userId  = ctx.session.user.id; // Get the userId from the session
    const note = await ctx.prisma.note.create({
      data: {
        ...input,
        user: {
          connect: {
            id: userId,
        },
      },
    },
    });
    return note;
  }),

  updateNote: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id: userId } = ctx.session.user; // Get the userId from the session
      const note = await ctx.prisma.note.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return note;
    }),


  deleteNote: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input: id }) => {
      // Get the userId from the session
      await ctx.prisma.note.delete({
        where: {
          id,



        },
      });
      return id;
    }),
});


// export type definition of API
export type NoteRouter = typeof noteRouter;
