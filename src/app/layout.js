import "./globals.css";
import SmoothScroll from "./_components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "WingAgent",
      url: "https://wingagent.com",
      logo: "https://wingagent.com/favicon.svg",
      sameAs: [
        "https://twitter.com/WingAgent",
        "https://instagram.com/WingAgent",
        "https://facebook.com/WingAgent"
      ],
      description:
        "WingAgent is a private AI dating assistant that automates swiping, matching, and first messages across major platforms.",
    }),
  }}
/>

export const metadata = {
  title: "WingAgent — Your personal AI wingman",
  description:
    "Private AI for your dating life. WingAgent automates swiping, matching, and first messages so you focus on real connections.",
  keywords: [
    "WingAgent",
    "AI dating assistant",
    "dating automation",
    "Tinder AI",
    "Bumble automation",
    "Hinge AI",
    "relationship tech",
    "private AI agent",
  ],
  openGraph: {
    title: "WingAgent — Your personal AI wingman",
    description:
      "Automated swipes, matches, and messages — you step in when it matters.",
    url: "https://wingagent.com",
    siteName: "WingAgent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WingAgent preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WingAgent — AI for your dating life",
    description:
      "Private AI that automates swiping, matching, and first messages.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}