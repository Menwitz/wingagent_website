export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const preferredRegion = "home";

/**
 * Build-safe Stripe checkout endpoint
 */
export async function POST(req) {
  // Lazy import; nothing runs until this function executes
  const { default: Stripe } = await import("stripe");

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("❌ Missing STRIPE_SECRET_KEY");
    return Response.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

  try {
    const { plan } = await req.json();
    const priceMap = {
      starter: process.env.STRIPE_PRICE_STARTER,
      pro: process.env.STRIPE_PRICE_PRO,
      elite: process.env.STRIPE_PRICE_ELITE,
    };
    if (!priceMap[plan]) {
      return Response.json({ error: "Invalid plan" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceMap[plan], quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err.message);
    return Response.json({ error: "Checkout failed" }, { status: 500 });
  }
}