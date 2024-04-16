import { auth } from "@/auth";
import Sidebar from "@/components/main/side-bar";

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
