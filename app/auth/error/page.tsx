"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UpdateIcon } from "@radix-ui/react-icons";
import { MessageCircleWarning } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

enum Error {
  Configuration = "Configuration",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
      .
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error") as Error;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className=" max-w-md p-6  border b rounded-lg shadow  text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight flex flex-row justify-center items-center gap-2">
          <MessageCircleWarning fontSize="2.5rem" /> Something went wrong
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-500">
          {errorMap[error] || "Please contact us if this error persists."}
        </div>
        <Button className="flex gap-x-3 mt-6" asChild>
          <Link href="/auth/login">
            <UpdateIcon className="w-4 h-4" /> <span>Try again</span>
          </Link>
        </Button>
      </Card>
      <div></div>
    </div>
  );
}
