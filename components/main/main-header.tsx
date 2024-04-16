import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PhoneSideBar from "@/components/phone-side-bar";

export default function MainHeader({ projectSlug, projectId }: any) {
  const previewURL = `/preview/${projectId}`;
  const [copySuccess, setCopySuccess] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + previewURL);
      setCopySuccess(true);
      toast({
        title: "URL copied to clipboard.",
      });
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  return (
    <header className="sticky top-0 z-30  flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <PhoneSideBar />
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{projectSlug?.slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 flex gap-x-4 md:grow-0">
        <Button variant="secondary" size="sm" onClick={copyToClipboard}>
          {copySuccess ? "Copied!" : "Copy URL"}
        </Button>

        <Button variant="secondary" size="sm" asChild>
          <Link href={`/dashboard/${projectId}/submissions`}>Submissions</Link>
        </Button>

        <Button size="sm" asChild>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`/preview/${projectId}`}
          >
            Preview
          </Link>
        </Button>
      </div>
    </header>
  );
}
