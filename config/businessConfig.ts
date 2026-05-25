export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string; // Lucide icon name mapping
  featured: boolean;
}

export interface ArtistItem {
  name: string;
  specialty: string;
  image: string;
  instagram: string;
  bio: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneNumbers: string[];
  whatsAppNumber: string; // International format without + or spaces, e.g., '353871234567'
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
  workingHours: string;
  areasServed: string[];
  colors: {
    primary: string; // Primary brand color (Hex)
    secondary: string; // Secondary brand color (Hex)
    accent: string; // Accent color (Hex)
    neutralBg: string; // Clean background
    neutralDark: string; // Professional dark text
  };
  services: ServiceItem[];
  artists: ArtistItem[];
}

export const businessConfig: BusinessConfig = {
  businessName: "Inkwell Studio",
  tagline: "Where Art Meets Skin",
  phoneDisplay: "+353 00 000 0000",
  phoneNumbers: ["+353000000000"],
  whatsAppNumber: "353000000000",
  email: "hello@inkwellstudio.com",
  address: "Dublin City Centre, Ireland",
  // Google Maps embed URL for Dublin City Centre
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Dublin%20City%20Centre,%20Ireland&t=&z=14&ie=UTF8&iwloc=&output=embed",
  workingHours:
    "Monday - Friday: 10:00 AM - 7:00 PM, Saturday: 10:00 AM - 6:00 PM, Sunday: 12:00 PM - 5:00 PM",
  areasServed: [
    "Dublin City Centre",
    "Dublin",
    "Ireland"
  ],
  colors: {
    primary: "#8c1d27", // Deep Crimson Red (original theme)
    secondary: "#9bbca7", // Sage Green (original theme)
    accent: "#d4af37", // Vintage Gold (original theme)
    neutralBg: "#ffffff", // Pure White
    neutralDark: "#18181b" // Charcoal Black
  },
  services: [
    {
      id: "custom-design",
      name: "Custom Tattoo Design",
      shortDescription: "Collaborative 1-on-1 consultations to draft and refine your unique tattoo concept.",
      fullDescription:
        "Every great tattoo starts with a conversation. Work directly with our resident artists to sketch, refine, and map out your custom piece. We guide you on sizing, placement, and composition to ensure the final tattoo fits your body and matches your personal style perfectly.",
      image: "/art.jpg",
      iconName: "Feather",
      featured: true
    },
    {
      id: "fine-line",
      name: "Fine Line Tattoos",
      shortDescription: "Delicate, precise, and elegant designs with clean, thin linework that ages beautifully.",
      fullDescription:
        "Specializing in high-precision, elegant fine-line tattooing. From minimalist floral arrangements to geometric designs and custom script, we focus on subtle placement and impeccable technique to create understated pieces that last.",
      image: "/art3.jpg",
      iconName: "Paintbrush",
      featured: true
    },
    {
      id: "full-colour",
      name: "Full Colour Tattoos",
      shortDescription: "Vibrant, highly saturated colour tattoos crafted with premium pigments for lasting brilliance.",
      fullDescription:
        "Our artists specialize in bringing vivid colour concepts to life, from bold neo-traditional to illustrative colour tattoos. We use premium, skin-safe pigments and clean linework to ensure your colour tattoo remains bright, saturated, and beautiful for years to come.",
      image: "/art4.jpg",
      iconName: "Palette",
      featured: true
    },
    {
      id: "black-and-grey",
      name: "Black and Grey Tattoos",
      shortDescription: "Smooth gradients, deep contrast, and fine detail for a classic, timeless aesthetic.",
      fullDescription:
        "From soft, smooth shading to high-contrast dark realism, our black and grey work emphasizes longevity and clean application. Whether it's a delicate fine-line piece or a bold sleeve, we craft designs that stand the test of time.",
      image: "/art2.jpg",
      iconName: "Camera",
      featured: true
    },
    {
      id: "cover-up",
      name: "Cover Up Tattoos",
      shortDescription: "Expert cover-up work transforming unwanted tattoos into stunning new pieces.",
      fullDescription:
        "Our experienced artists specialize in cover-up tattoos, carefully assessing your existing ink and designing creative solutions that conceal and transform. From subtle reworks to bold new designs, we make your old tattoo disappear into something you'll love.",
      image: "/art1.jpg",
      iconName: "Sparkles",
      featured: true
    },
    {
      id: "piercing",
      name: "Piercing",
      shortDescription: "Professional ear, facial, and body piercings using premium sterile jewelry. Walk-ins welcome.",
      fullDescription:
        "Our fully trained piercing team maintains the highest medical-grade sterilization standards. We offer professional placements, a curated selection of premium implant-grade jewelry, and comprehensive aftercare support to ensure a safe, comfortable healing process.",
      image: "/pis.jpg",
      iconName: "Gem",
      featured: true
    }
  ],
  artists: [
    {
      name: "Alex",
      specialty: "Custom Designs & Full Colour",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      instagram: "inkwellstudio",
      bio: "Lead artist specializing in custom pieces with bold colour, strong contrast, and clean technical application."
    },
    {
      name: "Maya",
      specialty: "Fine Line & Blackwork",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      instagram: "inkwellstudio",
      bio: "Known for clean linework, elegant details, and thoughtful placement that reads beautifully over time."
    },
    {
      name: "Jordan",
      specialty: "Black & Grey Realism",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      instagram: "inkwellstudio",
      bio: "Specializes in black and grey realism with careful composition, depth, and smooth shading for high-impact finished pieces."
    }
  ]
};
