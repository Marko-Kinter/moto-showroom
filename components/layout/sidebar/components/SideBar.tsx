"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Link,
} from "@heroui/react";
import SlugLinks from "./SlugLinks";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

export default function SideBar() {

  const { status } = useSession();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const urls = [{
    title: "About",
    ref:"/about"
  },{
    title: "Contact",
    ref:"/contact",
  },{
    title: "Legal",
    ref:"/legal",
  }]

  return (
    <>
      <button onClick={onOpen}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      {console.log("Drawer presionado")}
      <Drawer 
      backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">MKM Garage</DrawerHeader>
              <DrawerBody>
                {urls.map((url)=>(
                <Link key={url.title} onClick={onClose} className="text-lg text-foreground font-semibold" href={url.ref} size="sm">
                {url.title}
                </Link>
                ))}

                <SlugLinks onClose={onClose} />
              </DrawerBody>
              <DrawerFooter>
                {status === "authenticated" && (
                <Link onClick={onClose} className="text-default-400" href="/login" size="sm">
                Login
                </Link>
                )}
                {status === "unauthenticated" && (
                <Link onClick={signOut} className="text-red-600" href="/login" size="sm">
                Log-out
                </Link>
                )}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
