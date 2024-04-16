"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingSideBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const titles = {
    "/settings": "Settings",
    "/settings/billing": "Billing",
  };
  const bigTitle =
    Object.entries(titles).find(([path]) => isActive(path))?.[1] || "Settings";

  return (
    <div>
      <main className="flex min-h-[calc(100vh - _theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">{bigTitle}</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px 1fr] lg:grid-cols-[250px 1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link
              href="/settings"
              className={cn(
                "text-muted-foreground",
                isActive("/settings") && "font-semibold text-primary"
              )}
            >
              General
            </Link>
            <Link
              href="/settings/billing"
              className={cn(isActive("/settings/billing") && "text-primary")}
            >
              Billing
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
