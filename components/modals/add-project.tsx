"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import Loading from "../loading";
import { Project } from "@/lib/types";
import { FileUpload } from "../FileUpload";
import { useToast } from "../ui/use-toast";
import { InfoCircledIcon } from "@radix-ui/react-icons";

// interface ModalProps {
//   children: React.ReactNode;
//   data: Project;
// }

export function AddProject({ children, data }: any) {
  const router = useRouter();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Please fill the field",
    }),
    fileUrl: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name,
      fileUrl: data?.logoUrl!,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/projects", values);
      router.push(`/dashboard/${response.data.id}`);
      toast({
        title: "Deck created.",
      });
    } catch {
      console.error("error");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem when add deck.",
      });
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] max-w-[425px]  p-8">
        <DialogHeader>
          <DialogTrigger>Add Deck</DialogTrigger>
          <DialogDescription>
            Enter the name for your new deck and select a file to upload.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8 flex flex-col"
            >
              <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} id="name" />
                    </FormControl>
                    <FormDescription>
                      Enter the name for your new deck.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <div className="flex justify-between">
                <div className=" italic text-muted-foreground flex gap-x-1 text-xs w-60">
                  <InfoCircledIcon />
                  <p>Please wait while the image is being uploaded...</p>
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loading /> : "Save"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
