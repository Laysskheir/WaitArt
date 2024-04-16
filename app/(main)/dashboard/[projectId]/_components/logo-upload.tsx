"use client";

import { UploadButton } from "@/lib/uploadthing";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/FileUpload";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function LogoUpload() {
  const formSchema = z.object({
    fileUrl: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileUrl: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
       await axios.post("/api/projects", values);
      toast("Logo upload success");
      console.log("Logo upload");

    } catch {
      console.log("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="fileUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUpload
                  endpoint="fileUrl"
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Upload logo</Button>
      </form>
    </Form>
  );
}
