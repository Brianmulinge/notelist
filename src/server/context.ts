import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from "../../prisma/lib/prismadb"


export const createContext = async (
    opts?: trpcNext.CreateNextContextOptions,
) => {
    return {
    req: opts?.req,
    prisma,
    note: prisma.note,
    user: prisma.user,
    session : prisma.session,
    };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
