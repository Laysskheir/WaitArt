import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkSubscription } from "@/lib/subscription";
import axios from "axios";
import SubscribeButton from "@/components/subscribe-button";

export default async function Billing() {
  const isPro = await checkSubscription();

  
  console.log("isPro from page", isPro);

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="text-2xl">
          {isPro ? "Your Pro Subscription" : "You are free plan"}
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className=" text-muted-foreground">
        {isPro
          ? "You are currently subscribed to the Pro plan, enjoying with the benefits."
          : " You are currently on the Free plan. Consider upgrading to Pro for features."}
      </CardContent>
      <CardFooter className="flex justify-end">
        <SubscribeButton isPro={isPro} />
      </CardFooter>
    </Card>
  );
}
