import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google"
import { prisma } from "./connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma ),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin
      }
      return session;
    },

    async jwt({ token }) {
      
      const userInDB = await prisma.user.findUnique({
        where:{
          email: token.email! 
        }
      })

      token.isAdmin = userInDB?.isAdmin ?? false;
      return token
    }
  }
});