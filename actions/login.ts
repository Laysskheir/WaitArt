// "use server";

// import { z } from "zod";
// import { signIn } from "@/auth";
// import { LoginSchema } from "@/schemas";

// export const login = async (values: z.infer<typeof LoginSchema>) => {
//   //   Check to see if data is valid
//   const isValid = LoginSchema.safeParse(values);

//   if (!isValid.success) {
//     throw new Error("Email is not valid");
//   }

//   const { email } = isValid.data;

//   signIn("email", { email, redirectTo: "/dashboard" });

//   return { success: `Email sent to ${email}` };
// };
