import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Input } from "@/components/ui/input";

export default function Settings() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      
      <div className="grid gap-6">
        <Card x-chunk="dashboard-04-chunk-1">
          <CardHeader>
            <CardTitle>Your Name</CardTitle>
            <CardDescription>
              Please enter your full name, or a display name you are comfortable
              with.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="Name" className="w-1/2" />
            </form>
          </CardContent>
          <CardFooter className="border-t flex justify-between px-6 py-4">
            <p className="text-sm text-muted-foreground ">Max 32 characters.</p>
            <Button>Save </Button>
          </CardFooter>
        </Card>
        <Card x-chunk="dashboard-04-chunk-2">
          <CardHeader>
            <CardTitle>Your Email</CardTitle>
            <CardDescription>
              This will be the email you use to log in to WaitArt and receive
              notifications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="Email" className="w-1/2" />
            </form>
          </CardContent>
          <CardFooter className="border-t flex justify-between px-6 py-4">
            <p className="text-sm text-muted-foreground ">Max 32 characters.</p>
            <Button>Save </Button>
          </CardFooter>
        </Card>
        <Card x-chunk="dashboard-04-chunk-3">
          <CardHeader>
            <CardTitle>Your Avatar</CardTitle>
            <CardDescription>
              This is your avatar image on WaitArt.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input type="file" className=" rounded-full w-16 h-16 p-4" />
            </form>
          </CardContent>
          <CardFooter className="border-t flex justify-between px-6 py-4">
            <p className="text-sm text-muted-foreground ">
              Square image recommended. Accepted file types: .png, .jpg. Max
              file size: 2MB.
            </p>
            <Button>Save </Button>
          </CardFooter>
        </Card>
        <Card className=" border-destructive">
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription>
              Permanently delete your Dub.co account, all of your workspaces,
              links and their respective stats. This action cannot be undone -
              please proceed with caution.
            </CardDescription>
          </CardHeader>

          <CardFooter className="border-t bg-destructive/25 flex justify-end px-6 py-4">
            <Button variant="destructive">Delete account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
