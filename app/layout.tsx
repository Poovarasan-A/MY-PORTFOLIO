import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexVulf Technologies | Modern Technology Studio",
  description:
    "NexVulf Technologies is a modern technology studio building websites, mobile applications, custom software, e-commerce experiences, and SaaS products.",
  keywords: [
    "NexVulf Technologies",
    "Technology Studio",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "E-commerce",
    "Shopify Storefronts",
    "SaaS Product Engineering",
    "Full Stack Development",
  ],
  metadataBase: new URL("https://nexvulf.com"),
  alternates: {
    canonical: "https://nexvulf.com",
  },
  openGraph: {
    title: "NexVulf Technologies | Modern Technology Studio",
    description:
      "A modern technology studio building websites, mobile applications, custom software, e-commerce experiences, and SaaS products.",
    url: "https://nexvulf.com",
    siteName: "NexVulf Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexVulf Technologies | Modern Technology Studio",
    description:
      "A modern technology studio building websites, mobile applications, custom software, e-commerce experiences, and SaaS products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ncbrqiizxo");
      `,
          }}
        />

        {/* Chatbot Widget */}
        {/* <Script
          src="https://salesbot-widget.netlify.app/widget.js"
          strategy="afterInteractive"
        /> */}

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexVulf Technologies",
              url: "https://nexvulf.com",
              description:
                "Modern technology studio building websites, mobile applications, custom software, e-commerce experiences, and SaaS products.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-black overflow-x-hidden scrollbar-hidden`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
