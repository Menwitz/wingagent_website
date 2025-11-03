import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * POST /api/stripe/portal
 * Body: { customerId: "cus_XXXX" }
 */
export async function POST(req) {
  try {
    const { customerId } = await req.json();

    if (!customerId) {
      return Response.json({ error: "Missing customer ID" }, { status: 400 });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe portal error:", err.message);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}