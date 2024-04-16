import { auth } from "@/auth";
import { db } from "@/lib/db";

export default async function currentUser() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      throw new Error("User email not found in session");
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    return currentUser;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}
