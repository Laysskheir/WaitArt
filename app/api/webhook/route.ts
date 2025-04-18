import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return new NextResponse("Stripe signature not found", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`WEBHOOK ERROR: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    try {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      if (!session?.metadata?.userId) {
        return new NextResponse("userId is required", { status: 400 });
      }

      await db.userSubscription.create({
        data: {
          userId: session?.metadata?.userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    } catch (error: any) {
      return new NextResponse(`Subscription retrieval error: ${error.message}`, { status: 400 });
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    try {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      await db.userSubscription.update({
        where: {
          stripeCustomerId: subscription.id,
        },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    } catch (error: any) {
      return new NextResponse(`Subscription update error: ${error.message}`, { status: 400 });
    }
  }

  return new NextResponse(null, { status: 200 });
}
