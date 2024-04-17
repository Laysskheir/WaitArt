import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./header/logo";
import { Icons } from "./icons";


export default function PhoneSideBar() {
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
              href="/dashboard"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Icons.dashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Icons.lock className="h-5 w-5" />
              Pricing
            </Link>
          </nav>
          
        </SheetContent>
      </Sheet>
    </header>
  );
}
