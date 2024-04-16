import { db } from "@/lib/db";
import PreviewContent from "./_components/preview-content";

export default async function page({
  params,
}: {
  params: { projectId: string };
}) {
  const data = await db.settings.findMany({
    where: {
      projectId: params.projectId,
    },
  });

  const logoUrl = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
    select: {
      logoUrl: true,
    },
  });

  const setting = data[0] || {};

  return (
    <PreviewContent
      setting={setting}
      projectId={params.projectId}
      logoUrl={logoUrl}
    />
  );
}
