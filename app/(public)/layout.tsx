import { auth } from "@/auth";
import { redirect } from "next/navigation";

const PublicLayout = async ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    const session = await auth();

  if (!session){
    redirect("/")
  }
    return ( 
      <div className="h-full ">
        {children}
      </div>
     );
  }
   
  export default PublicLayout;