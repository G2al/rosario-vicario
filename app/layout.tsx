import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// Dominio non ancora scelto: su Vercel si usa l'URL di produzione del progetto.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rosario Vicario — Personal Trainer a Sant'Antimo",
  description:
    "Allenamenti one-to-one, percorsi di coppia e coaching a distanza con Rosario Vicario, personal trainer laureato in Scienze Motorie. Golden Village, Sant'Antimo (NA). Prezzi chiari, scrivimi su WhatsApp.",
  openGraph: {
    title: "Rosario Vicario — Personal Trainer",
    description: "Allenamenti one-to-one alla Golden Village di Sant'Antimo e coaching a distanza.",
    locale: "it_IT",
    type: "website",
    images: ["/images/rosario/spalle.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

// Attiva gli stati iniziali delle animazioni prima del primo paint,
// solo se l'utente non ha chiesto di ridurre il movimento.
const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${site.name} — ${site.role}`,
  telephone: site.phoneDisplay,
  email: site.email,
  areaServed: site.area,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "NA", addressCountry: "IT" },
  priceRange: "35€–750€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${anton.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
