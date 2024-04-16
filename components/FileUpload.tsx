"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { FileIcon, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
  value?: string;
}

export const FileUpload = ({ onChange, value }: FileUploadProps) => {
  if (value) {
    return (
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="relative flex items-center p-2 mt-2 rounded-md bg-background">
          <img src={value} alt="Logo" className="w-16 h-16 mr-2" />
        </div>
        <Button onClick={() => onChange("")} variant="ghost" type="button">
          <X className="h-4 w-4" />
          Remove Logo
        </Button>
      </div>
    );
  }
  return (
    <UploadButton
      className=""
      appearance={{
        button:
          " rounded-full ut-ready:bg-green-500 ut-uploading:cursor-not-allowed  bg-red-500 bg-none after:bg-orange-400",
        allowedContent: "text-tranparent",
      }}
      endpoint="fileUrl"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
        console.log("Files: ", res);
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
      content={{
        button({ ready }) {
          if (ready) return <div>Choose Logo</div>;

          return "Getting ready...";
        },
        allowedContent({ ready, isUploading }) {
          if (!ready) return "Checking what you allow";
          if (isUploading) return "Logo is uploading wait ...";
          return ``;
        },
      }}
    />
  );
};
