import { auth } from "@/auth";
import Sidebar from "@/components/main/side-bar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
};
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div className="flex">
      <Sidebar session={session} />
      {children}
    </div>
  );
};

export default MainLayout;
