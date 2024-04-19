"use client";

import { Button } from "@/components/ui/button";

import SidebarItem from "./side-bar-item";
import {
  GearIcon,
  HomeIcon,
  InfoCircledIcon,
  LockOpen1Icon,
  MinusCircledIcon,
  MixIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { logout } from "@/actions/logout";
import Logo from "../header/logo";

const routes = [
  {
    label: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    label: "Projects",
    path: "/dashboard",
    icon: MixIcon,
  },

  {
    label: "Pricing",
    path: "/pricing",
    icon: LockOpen1Icon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: GearIcon,
  },
];

const fixedRoutes = [
  {
    label: "Help & Information",
    path: "/help",
    icon: InfoCircledIcon,
  },
];

export default function Sidebar({ session }: any) {
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="hidden border max-h-[100vh]  md:block w-80">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Logo />
        </div>
        <div className="">
          {/* <Card>
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
          </Card> */}
        </div>
        <div className="flex-1 ">
          <nav className="grid items-start px-2 space-y-3 text-sm font-medium lg:px-4">
            {session?.user && (
              <div className="flex space-x-2 mb-4 p-3">
                <div>
                  <Image
                    alt="Profile"
                    className="rounded-full"
                    src={session?.user?.image || "/placeholder.svg"}
                    width={38}
                    height={38}
                  />
                </div>
                <div>
                  <div className="text-sm"> {session?.user?.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {session?.user?.email}
                  </div>
                </div>
              </div>
            )}
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
        <nav className="grid items-start px-2 space-y-3 text-sm font-medium lg:px-4">
          {fixedRoutes.map((route) => (
            <SidebarItem
              key={route.path}
              label={route.label}
              path={route.path}
              icon={route.icon}
            />
          ))}

          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="flex items-center text-muted-foreground justify-start p-5  text-sm font-semibold gap-x-2  rounded-lg transition duration-200 ease-in-out focus:outline-none"
          >
            <MinusCircledIcon className="h-5 w-5" />
            <p>Log Out</p>
          </Button>
        </nav>
      </div>
    </div>
  );
}
