export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/stripe/portal
 * Body: { customerId: "cus_xxx" }
 */
export async function POST(req) {
  // Lazy import so nothing executes at build time
  const { default: Stripe } = await import("stripe");

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.error("❌ Missing STRIPE_SECRET_KEY in environment");
    return Response.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

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
    return Response.json({ error: "Portal creation failed" }, { status: 500 });
  }
}