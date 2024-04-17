import currentUser from "@/actions/current-user";
import { db } from "./db";

const DAYS_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const user = await currentUser();

  const userSubscription = await db.userSubscription.findUnique({
    where: { userId: user?.id },
    select: {
      stripeCustomerId: true,
      stripeSubscriptionId: true,
      stripePriceId: true,
      stripeCurrentPeriodEnd: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  // Check if the subscription has expired return false if expired and true if not expired
  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAYS_IN_MS >
      Date.now();

  return !!isValid;
};
