import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { businessConfig } from "@/config/businessConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = "https://inkwellstudio.com";
const siteName = businessConfig.businessName;
const defaultTitle = `${siteName} | Custom Tattoos & Piercing in Dublin`;
const defaultDescription = `Visit ${siteName} in Dublin City Centre. Custom designs, fine line work, full colour tattoos, cover-ups, and professional piercing. Walk-ins welcome.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords:
    "tattoo studio dublin, tattoo shop dublin, custom tattoos dublin, fine line tattoos dublin, full colour tattoos dublin, cover up tattoos dublin, piercing dublin, inkwell studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    url: "/",
    siteName,
    images: [{ url: "/art.jpg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/art.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dynamicStyles = {
    "--brand-primary": businessConfig.colors.primary,
    "--brand-secondary": businessConfig.colors.secondary,
    "--brand-accent": businessConfig.colors.accent,
    "--brand-neutral-bg": businessConfig.colors.neutralBg,
    "--brand-neutral-dark": businessConfig.colors.neutralDark,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      style={dynamicStyles}
    >
      <body className="min-h-full flex flex-col bg-brand-neutral-bg text-brand-neutral-dark">
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: siteName,
              url: siteUrl,
              telephone: businessConfig.phoneNumbers?.[0],
              email: businessConfig.email,
              address: businessConfig.address,
              description: businessConfig.tagline,
            }),
          }}
        />
        <Navbar />
        {/* Padding-top to ensure content does not slide under the floating sticky header */}
        <main className="flex-1 flex flex-col pt-20 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
