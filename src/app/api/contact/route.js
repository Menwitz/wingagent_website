import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // Transport config — replace with your credentials or environment vars
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // example: support@wingagent.com
        pass: process.env.EMAIL_PASS,   // app password or secure key
      },
    });

    const mailOptions = {
      from: `"WingAgent Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVE || "support@wingagent.com",
      subject: `New contact form message from ${name || "Anonymous"}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}