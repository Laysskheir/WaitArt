"use client";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

export function Hero() {
  return (
    <div
      className=" w-full  flex md:items-center md:justify-center relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-6xl md:text-7xl font-bold text-center ">
          Join the Hype! <br /> Create Your Exclusive <br />
          <Highlight className=""> Waitlist Now</Highlight>
        </h1>
        <p className="mt-4 font-normal text-lg text-muted-foreground  text-center max-w-lg mx-auto">
          customizable waitlist forms in{" "}
          <span className="underline italic"> 20 seconds</span>
        </p>
        <div className="flex justify-center mt-8">
          <Button size="lg" className="text-lg p-6" asChild>
            <Link href="/dashboard">Try now for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
