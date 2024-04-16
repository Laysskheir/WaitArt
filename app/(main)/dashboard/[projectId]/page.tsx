import Sidebar from "@/components/main/side-bar";
import MainPage from "./_components/main-page";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import currentUser from "@/actions/current-user";

export default async function Page({
  params,
}: {
  params: { projectId: string };
}) {
  const user = await currentUser();
  if (!user?.id) {
    redirect("/auth/login");
  }
  const settings = await db.settings.findMany({
    where: {
      projectId: params.projectId,
    },
  });

  const projectSlug = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
    select: {
      slug: true,
    },
  });

  const logoUrl = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
    select: {
      logoUrl: true,
    }
  })
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <MainPage
        projectId={params.projectId}
        projectSlug={projectSlug}
        initialData={settings}
        logoUrl={logoUrl}
      />
    </div>
  );
}
