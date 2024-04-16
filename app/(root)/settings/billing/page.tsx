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

export default function Billing() {
  return (
    <div className="h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            You have not yet added any cards. Click the button below to add one.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="border-t flex justify-between px-6 py-4">
          <p className="text-sm text-muted-foreground ">
            At most, three credit cards, debit cards or prepaid cards can be
            added.
          </p>
          <Button>Add new card </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
