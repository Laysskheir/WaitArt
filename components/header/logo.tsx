import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="self-center text-2xl font-bold whitespace-nowrap ">
      Wait<span className="text-primary">Art</span>
    </Link>
  );
}
