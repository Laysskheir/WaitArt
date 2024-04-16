import { Resend } from "resend";
import { SubmissionsEmail } from "@/components/email-template";
import * as React from "react";
import currentUser from "@/actions/current-user";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email
export async function POST(req: NextRequest) {
  try {
    const { toEmail } = await req.json();
    const user = await currentUser();
    const { data, error } = await resend.emails.send({
      from: "Admin <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Submission Received",
      react: SubmissionsEmail({
        userFirstname: user?.name!,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Error sending email:", error);
    }
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
