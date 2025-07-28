"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="bg-[#212121]">
      <div className="container flex justify-between m-auto py-[26px]">
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem className="flex">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/service">Service</Link>
              </NavigationMenuLink>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/materials">Materials</Link>
              </NavigationMenuLink>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/works">Works</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button className="rounded-full bg-white hover:bg-accent cursor-pointer">
            <Search className="text-black"/>
          </Button>
          <Button className=" bg-white hover:bg-accent text-black cursor-pointer">Button</Button>
        </div>
      </div>
    </div>
  );
}
