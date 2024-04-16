import currentUser from "@/actions/current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: NextResponse,
  { params }: { params: { projectId: string } }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

    // Fetch the project and ensure the user owns it
    const project = await db.project.findUnique({
      where: {
        id: params.projectId,
        userId: user.id,
      },
    });

    if (!project) {
      return new NextResponse("Project not found or user unauthorized", {
        status: 404,
      });
    }

    const settings = await db.settings.findFirst({
      where: {
        projectId: project.id,
      },
    });

    if (!settings) {
      // If settings do not exist for the project, create them
      const values = await req.json();

      const newsettings = await db.settings.create({
        data: {
          ...values,
          projectId: project.id,
        },
      });
      return NextResponse.json(newsettings, { status: 201 });
    } else {
      // If settings exist, update them
      const values = await req.json();
      const updatedsettings = await db.settings.update({
        where: {
          id: settings.id,
        },
        data: {
          ...values,
        },
      });
      return NextResponse.json(updatedsettings, { status: 200 });
    }
  } catch (error) {
    console.log("[Settings update ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
