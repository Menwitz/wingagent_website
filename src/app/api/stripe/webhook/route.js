export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe webhook handler (build-safe)
 */
export async function POST(req) {
  // Lazy import; nothing executes at build time
  const { default: Stripe } = await import("stripe");

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("❌ STRIPE_SECRET_KEY missing in environment");
    return new Response("Server misconfigured", { status: 500 });
  }

  const stripe = new Stripe(key, { apiVersion: "2024-06-20" });
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case "checkout.session.completed":
        console.log("✅ Checkout completed:", event.data.object.id);
        break;
      case "customer.subscription.updated":
        console.log("🔁 Subscription updated:", event.data.object.id);
        break;
      case "customer.subscription.deleted":
        console.log("❌ Subscription canceled:", event.data.object.id);
        break;
      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`);
    }

    return new Response("Received", { status: 200 });
  } catch (err) {
    console.error("Stripe webhook error:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
}