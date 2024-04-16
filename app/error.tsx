"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-2">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className=""
      />

      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
}
