import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
          params: {
            scope: "openid email profile https://www.googleapis.com/auth/calendar",
            prompt: "consent",
            access_type: "offline",
          },
        },
    }),
  ],
};

export default NextAuth(authOptions);
