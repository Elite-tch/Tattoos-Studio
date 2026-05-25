import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore custom tattoo designs, fine line tattoos, full colour tattoos, cover-ups, and professional piercing at Inkwell Studio in Dublin City Centre.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
