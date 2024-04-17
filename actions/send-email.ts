"use server"
// /actions/send-email.ts

import { Resend } from "resend";
import { SubmissionsEmail } from "@/components/email-template";
import * as React from "react";
import currentUser from "@/actions/current-user";

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email
export async function sendEmail(toEmail: string) {
  try {
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

    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
