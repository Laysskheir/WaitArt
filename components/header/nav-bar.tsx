import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";

import { auth } from "@/auth";
import { DarkMode } from "../dark-mode";
import { UserNav } from "./user-nav";
import NavRoutes from "./nav-routes";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="flex h-16 items-center justify-between px-6 border-b">
      <Logo />
      <div className="flex justify-center items-center">
        {/* <NavRoutes /> */}
      </div>
      <div className="flex items-center space-x-4">
        <DarkMode />
        {session?.user ? (
          <UserNav session={session} />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
