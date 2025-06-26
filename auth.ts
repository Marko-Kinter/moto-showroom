import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getAllAdmins } from "./components/admin/actions/users-action";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        const admins = await getAllAdmins();
        const allowedEmails = admins.map((admin) => admin.email);
        return allowedEmails.includes(user.email);
      } catch (err) {
        console.error("Error checking admin emails:", err);
        return false;
      }
    },
    async session({ session }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Siempre redirige a la raíz
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
});
