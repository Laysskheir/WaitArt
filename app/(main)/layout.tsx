import { auth } from "@/auth";
import Sidebar from "@/components/main/side-bar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex">
      <Sidebar session={session} />
      {children}
    </div>
  );
};

export default MainLayout;
