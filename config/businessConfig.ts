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
  businessName: "Connected Ink Tattoo",
  tagline: "Custom Tattoos & Piercings in Temple Bar, Dublin",
  phoneDisplay: "+353 1 672 8850",
  phoneNumbers: ["+35316728850"],
  whatsAppNumber: "353XXXXXXXXX", // Placeholder for now
  email: "hello@example.com", // Placeholder for now
  address: "14 Crown Alley, Temple Bar, Dublin 2, D02 RX36, Ireland",
  // Google Maps embed URL for Connected Ink Tattoo (Temple Bar, Dublin)
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39024954.368620075!2d-80.09090619999999!3d53.34515029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9cb4ec465d%3A0xce0ad1cc72242a19!2sConnected%20Ink%20Tattoo!5e0!3m2!1sen!2sng!4v1779698218689!5m2!1sen!2sng",
  workingHours:
    "Mon-Wed: 11:00 AM - 7:00 PM, Thu-Fri: 11:00 AM - 8:00 PM, Sat: 11:00 AM - 7:00 PM, Sun: 12:00 PM - 6:00 PM",
  areasServed: [
    "Temple Bar",
    "Dublin City Centre",
    "Dublin 2",
    "Southside Dublin",
    "Northside Dublin",
    "All of Ireland"
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
      id: "custom-full-colour",
      name: "Custom Full Colour Tattoos",
      shortDescription: "Vibrant, highly saturated custom color work tailored to your vision and skin tone.",
      fullDescription:
        "Our artists specialize in bringing vivid color concepts to life, from bold neo-traditional to illustrative color tattoos. We use premium, skin-safe pigments and clean linework to ensure your color tattoo remains bright, saturated, and beautiful for years to come.",
      image: "/art4.jpg",
      iconName: "Palette",
      featured: true
    },
    {
      id: "black-grey",
      name: "Black & Grey Tattoos",
      shortDescription: "Smooth gradients, deep contrast, and fine detail for a classic, timeless aesthetic.",
      fullDescription:
        "From soft, smooth shading to high-contrast dark realism, our black and grey work emphasizes longevity and clean application. Whether it's a delicate fine-line piece or a bold sleeve, we craft designs that stand the test of time.",
      image: "/art3.jpg",
      iconName: "Paintbrush",
      featured: true
    },
    {
      id: "realism",
      name: "Realism Tattoos",
      shortDescription: "Highly detailed portraits, animals, and life-like compositions with depth and dimension.",
      fullDescription:
        "Specializing in photorealism, our realism artists capture striking details, accurate lighting, and three-dimensional depth. We work closely with your reference photos to create breathtaking portraits and lifelike designs that flow naturally with the contours of your body.",
      image: "/art2.jpg",
      iconName: "Camera",
      featured: true
    },
    {
      id: "irish-flash",
      name: "Irish Flash Tattoos",
      shortDescription: "Classic, Celtic, and Dublin-themed flash designs. Perfect for walk-ins and travel memories.",
      fullDescription:
        "Pay tribute to Dublin's heritage or capture your time in Temple Bar with our custom-curated Irish flash sheets. From Celtic knotwork and traditional folklore symbols to modern Dublin icons, these designs are optimized for clean, fast application during walk-in sessions.",
      image: "/art1.jpg",
      iconName: "Sparkles",
      featured: false
    },
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
      id: "full-piercing-studio",
      name: "Full Piercing Studio",
      shortDescription: "Professional ear, facial, and body piercings using premium sterile jewelry. Walk-ins welcome.",
      fullDescription:
        "Our fully licensed piercing studio maintains the highest medical-grade sterilization standards in Temple Bar. We offer professional placements, a curated selection of premium implant-grade jewelry, and comprehensive aftercare support to ensure a safe, comfortable healing process.",
      image: "/pis.jpg",
      iconName: "Gem",
      featured: true
    }
  ],
  artists: [
    {
      name: "Topper",
      specialty: "Custom Colour & Black/Grey",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      instagram: "connectedink_tattoo",
      bio: "Lead artist specializing in custom pieces with bold colour, strong contrast, and clean technical application."
    },
    {
      name: "Erin",
      specialty: "Fine-Line & Blackwork",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      instagram: "connectedink_tattoo",
      bio: "Known for clean line-work, elegant details, and thoughtful placement that reads beautifully over time."
    },
    {
      name: "Vlad",
      specialty: "Realism & Black/Grey",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      instagram: "connectedink_tattoo",
      bio: "Specializes in realism with careful composition, depth, and smooth shading for high-impact finished pieces."
    },
    {
      name: "Sean",
      specialty: "Custom Design & Irish Flash",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
      instagram: "connectedink_tattoo",
      bio: "Focuses on custom concepts and bold flash work - ideal for walk-ins and signature Dublin-inspired pieces."
    }
  ]
};
