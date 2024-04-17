"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader, Loader2 } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
  isPro: boolean;
}

export default function SubscribeButton({ isPro }: ButtonProps) {
  console.log("isPro", isPro);
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("[BILLING ERROR]", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button disabled={loading} onClick={onClick}>
      {loading ? (
        <>
          Processing...
          <Loader2 className="ml-2 h-4 w-4" />
        </>
      ) : isPro ? (
        "Manage Subscription"
      ) : (
        "Upgrade"
      )}
    </Button>
  );
}
