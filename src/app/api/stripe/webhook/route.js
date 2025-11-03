/**
 * Stripe checkout endpoint – build-safe version
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const preferredRegion = "home";

export async function POST(req) {
  const { plan } = await req.json();

  // Lazy import prevents build-time execution
  const { default: Stripe } = await import("stripe");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-06-20",
  });

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ STRIPE_SECRET_KEY not set");
    return Response.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  try {
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
    return Response.json({ error: "Stripe checkout failed" }, { status: 500 });
  }
}