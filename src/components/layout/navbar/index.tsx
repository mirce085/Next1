"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <div className="bg-[#212121]">
      <div className="container flex justify-between m-auto py-[26px]">
        <div className="logo">
          <h1 className="text-2xl text-white">Raume</h1>
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
