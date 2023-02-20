import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../prisma/lib/prismadb";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  //callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

export default NextAuth(authOptions);
