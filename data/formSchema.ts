// formSchema.ts

import { z } from "zod";

export const FormSchema = z.object({
  buttonColor: z.optional(z.string()),
  buttonBorderColor: z.optional(z.string()),
  buttonTextColor: z.optional(z.string()),
  bgColor: z.optional(z.string()),
  borderWidthButton: z.optional(z.string()),
  borderRadiusButton: z.optional(z.string()),
  fontWeight: z.optional(z.string()),
  buttonText: z.optional(z.string()),
  successMessage: z.optional(z.string()),
  socialProof: z.optional(z.boolean()),
  // Additional fields
  color: z.optional(z.string()),
  borderColor: z.optional(z.string()),
  headingTextColor: z.optional(z.string()),
  signupTextColor: z.optional(z.string()),
  borderWidthInput: z.optional(z.string()),
  borderRadiusInput: z.optional(z.string()),
  placeholderText: z.optional(z.string()),
  heroText: z.optional(z.string()),
  subText: z.optional(z.string()),
});
