import NextAuth from "next-auth";

import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  // callbacks: {
  //   async session({ token, session }) {
  //     console.log("Session Token", token);

  //     return session;
  //   },
  //   async jwt({ token }) {
  //     console.log("JWT Token", token);
  //     return token;
  //   },
  // },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
