"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import SideBar from "./sidebar/components/SideBar";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <HeroUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">MKM Garage</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        {status === "authenticated" && (
          <div>
            <h2>Welcome back {session.user?.name}</h2>
            <NextLink href="/admin">
              <p className="font-bold text-inherit">Admin</p>
            </NextLink>
          </div>
        )}
        <ThemeSwitch />
        <SideBar />
      </NavbarContent>
    </HeroUINavbar>
  );
};
