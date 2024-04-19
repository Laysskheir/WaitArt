"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./header/logo";
import { Icons } from "./icons";
import {
  GearIcon,
  HomeIcon,
  InfoCircledIcon,
  LockOpen1Icon,
  MinusCircledIcon,
  MixIcon,
} from "@radix-ui/react-icons";
import { logout } from "@/actions/logout";

export default function PhoneSideBar() {
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <AlignLeft className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Logo />
            <Link
              href="/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <MixIcon className="h-5 w-5" />
              Projects
            </Link>

            <Link
              href="/pricing"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Icons.lock className="h-5 w-5" />
              Pricing
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <GearIcon className="h-5 w-5" />
              Setting
            </Link>
            <div className="grid items-start space-y-3 text-lg ">
              <Link
                href="/help"
                className="flex mb-6 items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <InfoCircledIcon className="h-5 w-5" />
                Help & Information
              </Link>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleLogout}
                className="flex items-center text-muted-foreground justify-start py-5 text-lg  font-semibold gap-x-2  rounded-lg transition duration-200 ease-in-out focus:outline-none"
              >
                <MinusCircledIcon className="h-5 w-5" />
                <p>Log Out</p>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
