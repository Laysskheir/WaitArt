"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Home, LucideIcon, Package, Package2, Settings } from "lucide-react";
import { Icons } from "../icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
interface RoutesProps {
  label: string;
  icon: LucideIcon;
  path: string;
}
export default function SidebarItem({ label, path, icon: Icon }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && path === "/") ||
    pathname === path 

  const onClick = () => {
    router.push(path);
  };
  return (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClick}
          className={cn(
            "flex items-center justify-start p-5  text-sm font-semibold gap-x-2  rounded-lg transition duration-200 ease-in-out focus:outline-none",
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Icon className="h-4 w-4" />
          <p>{label}</p>
        </Button>
  );
}
