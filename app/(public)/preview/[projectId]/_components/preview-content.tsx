"use client";
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
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { people } from "@/data/people";
import Link from "next/link";
import { Icons } from "@/components/icons";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function PreviewContent({ setting, projectId, logoUrl }: any) {
  const { toast } = useToast();
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await axios.post(`/api/projects/${projectId}/submission`, values);
      toast({
        title: "check submission in your email",
      });
      setSuccess(true);
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem when send submission.",
      });
    }
  };

  return (
    <Card
      style={{
        backgroundColor: setting.bgColor || "white",
      }}
      className="rounded-none h-screen flex items-center justify-center"
    >
      <Button
        variant="outline"
        className="flex gap-x-3 absolute bottom-6 right-6"
        asChild
      >
        <Link href="/">
          <span>made with WaitArt</span> <Icons.heart className="w-4 h-4" />
        </Link>
      </Button>
      <CardContent>
        <div className="max-w-xl mx-auto p-6 flex flex-col justify-center items-center">
          {logoUrl.logoUrl ? (
            <img
              src={logoUrl.logoUrl}
              alt="Logo"
              className="w-24 h-24 mr-2 mb-4"
            />
          ) : (
            <></>
          )}
          <h1 className="text-3xl font-bold mb-4">{setting.heroText}</h1>
          <p className="text-sm mb-6 text-center">{setting.subText}</p>
          {success ? (
            <Card className="text-center mb-4 p-3">
              <p className="text-xl ">{setting.successMessage}</p>
            </Card>
          ) : (
            <>
              <div className="flex flex-col md:flex-row gap-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex items-center gap-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={setting.placeholderText || ""}
                              className={`flex-grow md:w-80 rounded-${
                                setting.borderRadiusButton || ""
                              }`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className={` md:w-auto rounded-${
                        setting.borderRadiusButton || ""
                      } font-${setting.fontWeight || ""}`}
                      style={{
                        backgroundColor: setting.buttonColor || "",
                        color: setting.buttonTextColor || "",
                        borderColor: setting.buttonBorderColor || "",
                        borderWidth: setting.borderWidthButton || "",
                      }}
                    >
                      {setting.buttonText}
                    </Button>
                  </form>
                </Form>
              </div>
            </>
          )}
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            {people.map((person) => (
              <div
                key={person.id}
                className="flex flex-col mt-6 -ml-1 items-center justify-center"
              >
                <img
                  src={person.image}
                  alt="image"
                  className="rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-white"
                />
              </div>
            ))}
            {setting.socialProof && (
              <p className="mt-4 ml-4">
                <span className="font-semibold">Be the first</span> to join
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
