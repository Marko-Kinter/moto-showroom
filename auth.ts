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
      // Permite solo usuarios con emails en la lista
      if (user.email && ALLOWED_EMAILS.includes(user.email)) {
        return true;
      }
      return false; // no autorizado
    },
    async session({ session }) {
      // Aquí podrías añadir info extra a session si quieres
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});


