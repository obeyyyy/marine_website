import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { organizationJsonLd, siteUrl, socialImagePath } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VY Marine | Marine Engineering & Technical Services",
    template: "%s | VY Marine",
  },
  description:
    "Marine engineering and technical support for shipowners and managers, including decarbonization, energy efficiency, dry dock coordination and marine spares supply.",
  applicationName: "VY Marine",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "VY Marine",
    title: "VY Marine | Marine Engineering & Technical Services",
    description:
      "Marine engineering and technical support for shipowners and managers, including decarbonization, energy efficiency, dry dock coordination and marine spares supply.",
    url: "/",
    images: [{ url: socialImagePath, width: 1280, height: 720, alt: "Commercial vessel at sea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VY Marine | Marine Engineering & Technical Services",
    description:
      "Marine engineering and technical support for shipowners and managers, including decarbonization, energy efficiency, dry dock coordination and marine spares supply.",
    images: [socialImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased w-full`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="w-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
