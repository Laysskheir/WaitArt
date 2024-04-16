"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "../ui/use-toast";

interface DeleteProjectProps {
  children: React.ReactNode;
  projectId: string;
}

export function DeleteProject({ children, projectId }: DeleteProjectProps) {
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async () => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      toast({
        title: "Project deleted.",
      });
      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem when deleting project.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle> Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this project?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={onSubmit} variant="destructive" size="sm">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
