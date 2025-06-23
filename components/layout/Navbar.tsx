"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import SideBar from "./sidebar/components/SideBar";

export const Navbar = () => {
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
        <ThemeSwitch />
        <SideBar />
      </NavbarContent>
    </HeroUINavbar>
  );
};
