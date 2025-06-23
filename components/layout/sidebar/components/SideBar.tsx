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

export default function SideBar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      {console.log("Drawer presionado")}
      <Drawer 
      hideCloseButton
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
                <SlugLinks onClose={onClose} />
              </DrawerBody>
              <DrawerFooter>
                <Link className="text-default-400" href="/login" size="sm">
                Login
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
