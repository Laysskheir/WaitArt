import { auth } from "@/auth";
import Sidebar from "@/components/main/side-bar";
import { toast } from "@/components/ui/use-toast";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  
  }
  return (
    <div className="flex">
      <Sidebar session={session} />
      {children}
    </div>
  );
};

export default MainLayout;
