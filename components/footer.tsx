import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import NavRoutes from "./header/nav-routes";

export default function Footer() {
  return (
    <div>
      {/* #46339A #5FC6A4 #E5E7E3 */}
      <div className="w-full mt-4 flex items-center justify-center ">
        <div className=" w-full px-4  flex flex-col">
          <div className="flex flex-col">
            <div className="flex mt-24 mb-4 flex-row justify-between">
              <div className="text-3xl  font-bold">Wait<span className="text-primary">Art</span></div>

              <div className="flex flex-row space-x-8 items-center justify-between">
                <div className="rounded-full bg-primary-foreground p-3">
                  <LinkedInLogoIcon className="w-5 h-5 hover:text-primary text-black  cursor-pointer" />
                </div>
                <div className="rounded-full bg-primary-foreground p-3">
                  <InstagramLogoIcon className="w-5 h-5 hover:text-primary text-black  cursor-pointer" />
                </div>
                <div className="rounded-full bg-primary-foreground p-3">
                  <TwitterLogoIcon className="w-5 h-5 hover:text-primary text-black  cursor-pointer" />
                </div>
              </div>
            </div>
            <hr className="border-muted" />
            <p className="w-full text-center text-sm my-4 text-muted-foreground">
              © 2024 WaitArt, Inc. All rights reserved created by
              <span className="underline text-primary ml-1 italic cursor-pointer">
                LayssKheir
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
