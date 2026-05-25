import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Connected Ink Tattoo in Temple Bar, Dublin to book a tattoo or piercing session. Call, email, or message us on WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
