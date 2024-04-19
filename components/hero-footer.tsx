import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroFooter() {
  return (
    <div
      
      className="text-sm space-y-3 text-center text-muted-foreground"
    >
      <p>
        © 2024
        <span className="underline hover:text-primary">
          <Link
            className="mx-1"
            href="https://laysskheir.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            LayssKheir
          </Link>
        </span>
        Inc. All rights reserved.
      </p>

      <div className="flex h-5 items-center justify-center space-x-4 text-sm">
        <div>Terms</div>
        <Separator orientation="vertical" />
        <div>License</div>
        <Separator orientation="vertical" />
        <div>Privacy</div>
      </div>
    </div>
  );
}
