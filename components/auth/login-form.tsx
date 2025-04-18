"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Input } from "../ui/input";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "../ui/separator";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {};

  return (
    <div className="flex relative justify-center items-center h-screen">
      <Button className="flex gap-x-3 absolute top-6 left-6" asChild>
        <Link href="/">
          <Icons.arrow className="w-4 h-4" /> <span>Home</span>
        </Link>
      </Button>
      <Card className="w-full max-w-sm p-3">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Welcome</CardTitle>
          <CardDescription>Please sign in or sign up below.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign In with Email
              </Button>
            </form>
          </Form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
          <div className="grid grid-cols-1 gap-6">
            <Button
              variant="outline"
              className="bg-primary hover:bg-primary/85 p-5"
              onClick={() => signIn("google")}
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            {/* <Separator />
            <Button variant="outline" className="p-5" onClick={() => signIn("github")}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Continue with Github
            </Button> */}
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground text-center">
            By clicking continue, you agree to our{" "}
            <span className="underline text-sm">Terms </span>and
            <span className="underline pl-1  text-sm">Privacy</span>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
