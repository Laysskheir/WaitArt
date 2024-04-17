"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UpdateIcon } from "@radix-ui/react-icons";
import { MessageCircleWarning } from "lucide-react";
import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className=" max-w-md p-6  border b rounded-lg shadow  text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight flex flex-row justify-center items-center gap-2">
          <MessageCircleWarning fontSize="2.5rem" /> Something went wrong
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-500">
          Please contact us if this error persists.
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
