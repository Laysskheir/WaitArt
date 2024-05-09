import { auth } from "@/auth";
import SettingsPage from "@/components/settings-page";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if(!user) {
    redirect("/auth/login")
  }
  return <SettingsPage user={user} />;
}
