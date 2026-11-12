import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habitate Estate | Ultra-Luxury Real Estate & Private Estates",
  description: "Discover the world's most prestigious luxury properties. Experience bespoke concierge real estate consulting, premium private villas, and waterfront penthouses with Habitate Estate.",
  keywords: ["Luxury Real Estate", "Habitate Estate", "Premium Villas", "Mansions", "Penthouses", "Exclusive Estates", "London Properties", "Mayfair Real Estate"],
  authors: [{ name: "Habitate Estate" }],
  openGraph: {
    title: "Habitate Estate | Ultra-Luxury Real Estate & Private Estates",
    description: "Curated collection of the finest ultra-premium estates globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-luxury-bg text-charcoal selection:bg-bronze/30 selection:text-bronze">
        {children}
      </body>
    </html>
  );
}
