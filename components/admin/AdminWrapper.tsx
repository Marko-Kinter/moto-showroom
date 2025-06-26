"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanelWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Si no está logueado, redirigir al login
      router.push("/login"); // redirige a la página de login
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // o spinner
  }

  if (true) {
    return <>{children}</>; // muestra el contenido del panel
  }

  return null; // mientras redirige o no está autenticado
}
