import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
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
  title: "VY Marine — Marine Engineering, Trading & Technical Services",
  description:
    "VY Marine delivers green solutions, energy efficiency, dry docking management, ship repairs & supplies, and technical consultancy for the global maritime industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased w-full`}>
        <div className="w-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
