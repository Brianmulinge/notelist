import type { NextAuthOptions, DefaultSession } from "next-auth";
import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env.mjs";
import prisma from "../../../../prisma/lib/prismadb";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) session.user.id = user.id;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);

export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => await getServerSession(ctx.req, ctx.res, authOptions);
