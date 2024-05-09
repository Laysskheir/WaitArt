import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string(),
  image: z.string().url(),
});

export type updateUserValues = z.infer<typeof updateUserSchema>;
