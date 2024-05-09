"use server"
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { updateUserSchema, updateUserValues } from "@/schema/user-schema";

export async function updateProfile(values: updateUserValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw Error("Unauthorized");
  }
  const { name,email,image } = updateUserSchema.parse(values);

  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      email,
      image
    },
  });
}
