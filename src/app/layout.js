import "./globals.css";
import SmoothScroll from "./_components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next"
import CookieBanner from "./_components/CookieBanner";

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
    title: {
        default: "WingAgent — Your Personal AI Wingman",
        template: "%s | WingAgent",
    },
    description:
        "WingAgent is a private AI concierge that automates swiping, matching, and first messages across Tinder, Bumble, and Hinge—so you step in only when the spark is real.",
    keywords: [
        "AI dating assistant",
        "dating automation",
        "private AI concierge",
        "Tinder automation",
        "Bumble automation",
        "Hinge automation",
        "dating AI",
        "relationship technology",
    ],
    authors: [{ name: "WingAgent" }],
    creator: "Public Affairs Analytics LLC",
    publisher: "Public Affairs Analytics LLC",
    metadataBase: new URL("https://wingagent.ai"),
    icons: {
        icon: "/favicon.svg",
    },
    alternates: {
        canonical: "https://wingagent.ai",
    },
    openGraph: {
        title: "WingAgent — Your Personal AI Wingman",
        description:
            "Private AI dating automation across Tinder, Bumble, and Hinge. Designed for discretion and precision.",
        url: "https://wingagent.ai",
        siteName: "WingAgent",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://wingagent-website.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "WingAgent AI preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WingAgent — Your Personal AI Wingman",
        description:
            "Private AI dating automation built for discretion, authenticity, and results.",
        creator: "@wingagent",
        images: ["/og-cover.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "WingAgent",
                            url: "https://wingagent.ai",
                            logo: "https://wingagent.ai/logo.svg",
                            sameAs: [
                                "https://twitter.com/wingagent",
                                "https://www.linkedin.com/company/wingagent",
                            ],
                            description:
                                "WingAgent is a private AI dating concierge automating discovery and conversation across leading platforms.",
                        }),
                    }}
                />
            </head>
            <body className="bg-slate-950 text-white antialiased">
                <SmoothScroll />
                {children}
                <Analytics />
                <CookieBanner />
            </body>
        </html>
    );
}