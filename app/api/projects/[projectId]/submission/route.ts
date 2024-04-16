// /api/projects/[projectId]/submission.ts

import currentUser from "@/actions/current-user";
import { sendEmail } from "@/app/api/send/route";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

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

    const { email } = await req.json();

    // Save submission in the database
    const submission = await db.submission.create({
      data: {
        projectId: params.projectId,
        email,
      },
    });

    // Send email to the user's input email address
    await sendEmail(email);

    return NextResponse.json(submission, { status: 200 });
  } catch (error) {
    console.log("[Create submission Error]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

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
    const { submissionId } = await req.json();

    // Update submission in the database
    const submission = await db.submission.update({
      where: {
        id: submissionId, 
      },
      data: {
        verified: true,
      },
    });

    return new NextResponse(JSON.stringify(submission), { status: 200 });
  } catch (error) {
    console.error("[Update submission Error]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
