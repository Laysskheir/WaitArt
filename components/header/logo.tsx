import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-xl font-bold whitespace-nowrap"
    >
      <div className="flex items-center">
        <Image src="/logo-base.png" alt="logo" width={40} height={40} />
      </div>
      <span className="ml-1 mt-2">
        Wait<span className="text-primary">Art</span>
      </span>
    </Link>
  );
}
