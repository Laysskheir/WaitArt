"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";
import HeroFooter from "./hero-footer";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-between "
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="p-3 max-w-7xl mx-auto relative z-10 pt-20 mt-8 "
      >
        <h1 className="text-6xl md:text-7xl font-bold text-center">
          Join the Hype! <br /> Create Your Exclusive <br />
          <Highlight className=""> Waitlist Now</Highlight>
        </h1>
        <p className="mt-4 font-normal text-lg text-muted-foreground text-center max-w-lg mx-auto">
          customizable waitlist forms in{" "}
          <span className="underline italic"> 20 seconds</span>
        </p>
        <div className="flex justify-center mt-8">
          <Button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md hover:text-black   px-8 py-2 ">
            <span className="relative z-10">
              <Link href="/dashboard">Try now for free</Link>
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary-foreground  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </Button>
        </div>
      </motion.div>
      <div className="flex-grow"></div>
      <HeroFooter />
    </div>
  );
}
