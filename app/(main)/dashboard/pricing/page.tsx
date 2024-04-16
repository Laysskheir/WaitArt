"use client";
import { Icons } from "@/components/icons";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const featuresPaid = [
  "Up to 2K signups",
  "Up to 10 projects",
  "Waitlist Widget",
  "Email Verification",
  "Advanced Analytics",
  "Viral Referrals",
];
const featuresFree = [
  "Up to 500 signups",
  "Up to 3 projects",
  "Waitlist Widget",
];

const disadvantages = [
  "Email Verification",
  "Advanced Analytics",
  "Viral Referrals",
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("[STRIPE CLIENT ERROR]", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-10 space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              WaitArt Pricing
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Start free, launch with predictable costs, and scale efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
          <Card className="flex flex-col gap-1 p-6">
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <h3 className="text-3xl font-bold">Free Tier</h3>
                <p className="text-2xl font-bold">$0 /month</p>
              </div>
              <p className="text-sm text-muted-foreground ">
                WaitArt always-available free tier, no credit card required.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {featuresFree.map((feature, index) => (
                <li key={index}>
                  <Icons.checkIcon className="mr-2 inline-block h-4 w-4" />
                  {feature}
                </li>
              ))}

              {disadvantages.map((disadvantage, index) => (
                <li key={index} className=" text-muted-foreground/45">
                  <X className="mr-2 inline-block h-4 w-4" />
                  {disadvantage}
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/dashboard">Start for free</Link>
            </Button>
          </Card>
          <Card className="flex flex-col gap-1 p-6">
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <h3 className="text-3xl font-bold">Pro</h3>
                <p className="text-2xl font-bold">20$ /month</p>
              </div>
              <p className="text-sm text-muted-foreground ">
                All the resources, features and support you need to launch.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {featuresPaid.map((feature, index) => (
                <li key={index}>
                  <Icons.checkIcon className="mr-2 inline-block h-4 w-4" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button onClick={onSubscribe}>
              {loading ? <Loading /> : <p>Get started</p>}
            </Button>
          </Card>
        </div>

        
      </div>
    </section>
  );
}
