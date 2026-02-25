import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Mock auth: accept any valid email with password "password123"
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (email && password === "password123") {
          return {
            id: "1",
            name: "Alex Johnson",
            email: email,
            image: null,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
