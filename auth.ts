import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
const ALLOWED_EMAILS = [
  "admin1@mkmsgarage.com",
  "soporte@mkmsgarage.com",
  "kintermarko@gmail.com", // ejemplo
];
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      // solo dejamos pasar si el email está en la lista permitida
      return ALLOWED_EMAILS.includes(user.email ?? "");
    },
    async session({ session, token }) {
      return session;
    },
  },
});
