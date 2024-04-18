"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";
import HeroFooter from "./hero-footer";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-between " style={{ minHeight: "calc(100vh - 80px)" }}>
      <div className="p-3 max-w-7xl mx-auto relative z-10 pt-20 mt-8 ">
        <h1 className="text-6xl md:text-7xl font-bold text-center">
          Join the Hype! <br /> Create Your Exclusive <br />
          <Highlight className=""> Waitlist Now</Highlight>
        </h1>
        <p className="mt-4 font-normal text-lg text-muted-foreground text-center max-w-lg mx-auto">
          customizable waitlist forms in{" "}
          <span className="underline italic"> 20 seconds</span>
        </p>
        <div className="flex justify-center mt-8">
          <Button size="lg" className="text-lg p-6" asChild>
            <Link href="/dashboard">Try now for free</Link>
          </Button>
        </div>
      </div>
      <div className="flex-grow"></div>
      <HeroFooter />
    </div>
  );
}
