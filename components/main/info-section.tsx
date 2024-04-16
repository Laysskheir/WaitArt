import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InfoSection() {
  return (
    <Card className="rounded-xl  mx-16 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div className="space-y-4">
          <Button size="sm" variant="outline">
            Why WaitArt?
          </Button>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            Build anticipation.
            <br /> Customize effortlessly.
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            WaitArt empowers teams of all sizes to create and customize
            WaitArt effortlessly, allowing for seamless anticipation building
            and efficient scaling without any hassle.
          </p>

          <p className="text-primary underline text-sm">Explore case studies</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className=" text-primary">
            Easy to use <span className=" text-yellow-500">Launch</span>
            </h1>
            <br /> Utilizes WaitArt to streamline the WaitArt process for
            their YC-backed SaaS startup.
          </div>
          <div>
            <h1 className=" text-primary">
              Flux <span className=" text-yellow-500">Beta</span>
            </h1>
            <br /> Incorporates WaitArt to manage beta access for their
            innovative mobile app.
          </div>
          <div>
            <h1 className=" text-primary">
              Spark <span className=" text-yellow-500">Release</span>
            </h1>
            <br /> Implements WaitArt to generate excitement and manage
            pre-orders for their upcoming product launch.
          </div>
          <div>
            <h1 className=" text-primary">
              Propel <span className=" text-yellow-500">Campaign</span>
            </h1>
            <br /> Leverages WaitArt to create a buzz and track interest for
            their crowdfunding campaign.
          </div>
        </div>
      </div>
    </Card>
  );
}
