"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import SidebarItem from "./side-bar-item";
import { UserNav } from "../header/user-nav";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: Icons.dashboard,
  },

  {
    label: "Pricing",
    path: "/pricing",
    icon: Icons.lock,
  },
];

export default function Sidebar({ session }: any) {
  return (
    <div className="hidden border-r  md:block w-80">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="self-center text-2xl font-bold whitespace-nowrap ml-8">Wait<span className="text-primary">Art</span></span>
          </Link>
        </div>
        <div className="flex-1  mt-6">
          <nav className="grid items-start px-2 space-y-3 text-sm font-medium lg:px-4">
            {routes.map((route) => (
              <SidebarItem
                key={route.path}
                label={route.label}
                path={route.path}
                icon={route.icon}
              />
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            {session?.user ? (
              <div className="flex justify-center items-center p-2 gap-x-2">
                <UserNav session={session} />
                <p className="text-sm text-muted-foreground font-semibold">
                  {session?.user?.email}
                </p>
              </div>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
