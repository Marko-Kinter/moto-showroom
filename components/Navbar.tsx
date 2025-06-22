
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import Sidebar from "./sidebar/components/SideBar";

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
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <Sidebar />
           <Button
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-default-100"
                  href={"/login"}
                  variant="flat"
                >
                  Login
                </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
