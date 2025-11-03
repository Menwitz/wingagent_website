import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * POST /api/stripe/checkout
 * Body: { plan: "starter" | "pro" | "elite" }
 */
export async function POST(req) {
  try {
    const { plan } = await req.json();

    const priceMap = {
      starter: "price_12345", // replace with real Stripe price IDs
      pro: "price_67890",
      elite: "price_99999",
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
    console.error("Stripe checkout error:", err.message);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}