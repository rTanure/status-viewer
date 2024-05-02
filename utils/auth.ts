import { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
      checks: [ 'none' ]
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET as string,
} satisfies NextAuthOptions