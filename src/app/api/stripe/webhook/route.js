import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * POST /api/stripe/webhook
 * Handles subscription and payment events from Stripe.
 */
export async function POST(req) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Invalid Stripe signature:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle events
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log("✅ Checkout completed:", session.id);

      // TODO: Persist subscription data
      // Example:
      // await db.subscription.create({
      //   data: {
      //     email: session.customer_email,
      //     stripeCustomerId: session.customer,
      //     stripeSubscriptionId: session.subscription,
      //     plan: session.metadata?.plan || "starter",
      //     status: "active",
      //   },
      // });
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object;
      console.log("🔁 Subscription updated:", subscription.id);
      // TODO: update status in DB
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      console.log("❌ Subscription canceled:", subscription.id);
      // TODO: mark user subscription inactive in DB
      break;
    }

    default:
      console.log(`⚠️ Unhandled event type: ${event.type}`);
  }

  return new Response("Received", { status: 200 });
}

export const config = {
  api: {
    bodyParser: false, // Stripe requires raw body
  },
};