import { auth } from "@/auth";
import { SettingSideBar } from "@/components/SettingSideBar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
  },
  {
    title: "Account",
    href: "/settings/billing",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function SettingsLayout({ children }: SettingsLayoutProps) {
  const session = await auth();

  if (!session){
    redirect("/")
  }
  return (
    <>
      <div className=" space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your profile and account settings.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className=" border-muted border-b p-3  lg:w-1/5">
            <SettingSideBar items={sidebarNavItems} />
          </aside>
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}
