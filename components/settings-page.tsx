"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { Input } from "@/components/ui/input";
import { updateUserSchema } from "@/schema/user-schema";
import { useToast } from "./ui/use-toast";
import { updateProfile } from "@/actions/update-user";

export default function SettingsPage({ user }: any) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      image: user?.image || "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof updateUserSchema>) => {
    try {
      await updateProfile(values);
      toast({
        title: "Your profile has been updated.",
      });
    } catch {
      console.error("error");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem update profile.",
      });
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="grid gap-6">
        <Card x-chunk="form-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <CardHeader>
                <CardTitle>Your Name</CardTitle>
                <CardDescription>
                  Please enter your full name, or a display name you are
                  comfortable with.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter name"
                            {...field}
                            id="name"
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the name for your new deck.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-between px-6 py-4">
                <p className="text-sm text-muted-foreground ">
                  Max 32 characters.
                </p>
                <Button disabled={isLoading}>Save </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
        <Card x-chunk="form-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <CardHeader>
                <CardTitle>Your Email</CardTitle>
                <CardDescription>
                  This will be the email you use to log in to WaitArt and
                  receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter email"
                            {...field}
                            id="email"
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the email for your new deck.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-between px-6 py-4">
                <p className="text-sm text-muted-foreground ">
                  Max 32 characters.
                </p>
                <Button disabled={isLoading}>Save </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
        <Card x-chunk="form-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <CardHeader>
                <CardTitle>Your Avatar</CardTitle>
                <CardDescription>
                  This is your avatar image on WaitArt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 flex flex-col">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="file"
                            {...field}
                            className=" rounded-full w-16 h-16 p-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t flex justify-between px-6 py-4">
                <p className="text-sm text-muted-foreground ">
                  Square image recommended. Accepted file types: .png, .jpg. Max
                  file size: 2MB.
                </p>
                <Button disabled={isLoading}>Save</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
        <Card className=" border-destructive">
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription>
              Permanently delete your Dub.co account, all of your workspaces,
              links and their respective stats. This action cannot be undone -
              please proceed with caution.
            </CardDescription>
          </CardHeader>

          <CardFooter className="border-t bg-destructive/25 flex justify-end px-6 py-4">
            <Button variant="destructive">Delete account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
