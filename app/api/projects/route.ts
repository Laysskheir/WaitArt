import currentUser from "@/actions/current-user";
import { auth } from "@/auth";
import { generateSlug } from "@/data/slug";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest ) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

    const { name, fileUrl } = await req.json();

    const slug = generateSlug(name);

    const projects = await db.project.create({
      data: {
        userId: user.id,
        name,
        slug,
        logoUrl: fileUrl,
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.log("[project ADD ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
