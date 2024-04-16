import currentUser from "@/actions/current-user";
import { auth } from "@/auth";
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

    const { projectId } = params;
    const values = await req.json();

    const project = await db.project.update({
      where: {
        id: projectId,
        userId: user.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("[project update ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: NextResponse,
  { params }: { params: { projectId: string } }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

    const { projectId } = params;

    const project = await db.project.delete({
      where: {
        id: projectId,
        userId: user?.id,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("[project delete ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
