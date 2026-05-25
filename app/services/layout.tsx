import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore custom full colour, black & grey, realism, Irish flash tattoos, custom design, and our full piercing studio in Temple Bar, Dublin.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
