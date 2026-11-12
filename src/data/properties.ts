export interface Property {
  id: string;
  name: string;
  type: "Villa" | "Apartment" | "Penthouse" | "Commercial" | "Plots";
  location: string;
  price: number;
  beds?: number;
  baths?: number;
  area: number; // in sq ft
  image: string;
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  agentId: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  phone: string;
  email: string;
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const agentsData: Agent[] = [
  {
    id: "agent-1",
    name: "Alexander Sterling",
    role: "Managing Partner & Founder",
    experience: "18+ Years Experience",
    specialization: "Monaco & Swiss Waterfront Estates",
    phone: "+44 20 7946 2158",
    email: "alexander@habitateestate.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80",
    socials: {
      instagram: "https://instagram.com/sterling_luxury",
      linkedin: "https://linkedin.com/in/alexander-sterling",
    },
  },
  {
    id: "agent-2",
    name: "Victoria Vanderbilt",
    role: "Senior Broker",
    experience: "12+ Years Experience",
    specialization: "Beverly Hills & Aspen Mansions",
    phone: "+1 (310) 555-0199",
    email: "victoria@habitateestate.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
    socials: {
      instagram: "https://instagram.com/victoria_vanderbilt",
      linkedin: "https://linkedin.com/in/victoria-vanderbilt",
    },
  },
  {
    id: "agent-3",
    name: "Maximilian Romanov",
    role: "Director of International Markets",
    experience: "15+ Years Experience",
    specialization: "Dubai Palm Waterfront & Penthouses",
    phone: "+971 4 555 8900",
    email: "maximilian@habitateestate.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80",
    socials: {
      instagram: "https://instagram.com/max_romanov",
      linkedin: "https://linkedin.com/in/maximilian-romanov",
      twitter: "https://twitter.com/max_romanov",
    },
  },
  {
    id: "agent-4",
    name: "Elena Rostova",
    role: "Private Client Consultant",
    experience: "9+ Years Experience",
    specialization: "European Historical Châteaux",
    phone: "+33 1 42 68 53 00",
    email: "elena@habitateestate.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=500&q=80",
    socials: {
      instagram: "https://instagram.com/rostova_elena",
      linkedin: "https://linkedin.com/in/elena-rostova",
    },
  },
];

export const propertiesData: Property[] = [
  {
    id: "prop-1",
    name: "The Obsidian Cliff Villa",
    type: "Villa",
    location: "Monaco",
    price: 32000000,
    beds: 6,
    baths: 8,
    area: 11200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Perched majestically on the rugged cliffs overlooking the azure Mediterranean Sea, The Obsidian Cliff Villa is a tour-de-force of modern architecture. Featuring clean geometric lines, floor-to-ceiling high-impact structural glass, and natural dark stone elements, this home seamlessly integrates indoor and outdoor luxury living. A heated infinity pool cascades over the cliff edge, flanked by expansive marble terraces and an integrated outdoor kitchen. The master suite features custom Italian leather finishes, a private terrace, and a bath carved from a single block of Travertine marble.",
    features: [
      "Infinity Edge Cascading Pool",
      "Private Yacht Mooring Access",
      "Automated Crestron Home Automation System",
      "Professional Chef's Kitchen with Gaggenau Appliances",
      "1,200 Bottle Temperature-Controlled Wine Cellar",
      "Subterranean 5-Car Garage with Vehicle Elevator",
    ],
    yearBuilt: 2024,
    agentId: "agent-1",
  },
  {
    id: "prop-2",
    name: "Aurelia Celestial Penthouse",
    type: "Penthouse",
    location: "Dubai",
    price: 18500000,
    beds: 4,
    baths: 5,
    area: 7800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Spanning the entire top two floors of the iconic Marina Tower, the Aurelia Celestial Penthouse offers unparalleled 360-degree views of the Arabian Gulf and Dubai skyline. Designed with double-height ceilings and a custom brass spiral staircase, this penthouse embodies high-end luxury. The living areas are lined with Calacatta Gold marble, while the private rooftop deck boasts an infinity pool, outdoor lounge, and wellness sanctuary. Residents enjoy dedicated private lift access and access to the tower's elite concierge services.",
    features: [
      "360-Degree Panoramic Coastal Views",
      "Private Sky Infinity Pool and Sundeck",
      "Double Height 24-foot Ceilings",
      "Private Wellness Spa with Steam Room & Sauna",
      "Dedicated 24/7 Butler & Concierge Access",
    ],
    yearBuilt: 2025,
    agentId: "agent-3",
  },
  {
    id: "prop-3",
    name: "Bel-Air Luxury Sanctuary",
    type: "Villa",
    location: "Beverly Hills",
    price: 45000000,
    beds: 7,
    baths: 10,
    area: 15400,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Nestled behind private double gates in the most prestigious section of Bel-Air, this sprawling estate is a private sanctuary. Masterfully constructed with high-end steel, concrete, and Warm Oak elements, the estate balances grandeur with absolute tranquility. Highlights include a state-of-the-art indoor Dolby Atmos cinema, a fully equipped gym, a Finnish cedar sauna, and a championship tennis court. The grounds are meticulously landscaped with ancient olive trees, cascading water walls, and a large fire-pit lounge overlooking the city lights below.",
    features: [
      "State-of-the-art Dolby Atmos Cinema (15 Seats)",
      "Championship Grass Tennis Court",
      "Finnish Cedar Sauna and Cryotherapy Chamber",
      "120-Foot Heated Swimming Pool with Baja Shelf",
      "Professional Security Command Center",
    ],
    yearBuilt: 2023,
    agentId: "agent-2",
  },
  {
    id: "prop-4",
    name: "The Alpine Crest Chalet",
    type: "Villa",
    location: "Aspen",
    price: 24000000,
    beds: 5,
    baths: 6,
    area: 9500,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    ],
    description: "An exceptional ski-in/ski-out mountain estate situated on the slopes of Aspen Mountain. Built with massive hand-hewn logs, native river stone, and custom black iron accents, The Alpine Crest Chalet redefine mountain luxury. The majestic great room features a 30-foot cathedral ceiling and a massive stone fireplace. Floor-to-ceiling glass sliding doors open to a wide heated deck equipped with a swim spa, outdoor lounge, and fire pits—ideal for après-ski gatherings. Every bedroom is a suite featuring custom stone baths and cozy wood fireplaces.",
    features: [
      "Direct Ski-In / Ski-Out Access to Aspen Slopes",
      "Custom Outdoor Heated Swim Spa",
      "6 Indoor & Outdoor Woodburning Fireplaces",
      "Integrated Ski Locker Room with Boot Warmers",
      "State-of-the-Art Private Fitness Gym",
    ],
    yearBuilt: 2022,
    agentId: "agent-2",
  },
  {
    id: "prop-5",
    name: "One Hyde Park Residence",
    type: "Apartment",
    location: "London",
    price: 14000000,
    beds: 3,
    baths: 4,
    area: 4200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    ],
    description: "An elegant, highly private lateral apartment situated in London's premier residential address. Boasting stunning uninterrupted views over Hyde Park, the residence combines timeless British heritage styling with state-of-the-art technological automation. The custom walnut paneling, bespoke silk wall coverings, and hand-selected marble bathrooms highlight the quality of craftsmanship. Residents benefit from unparalleled concierge, valet parking, private spa, and elite security systems.",
    features: [
      "Direct Uninterrupted Views over Hyde Park",
      "24/7 Security and Elite Concierge Services",
      "Private Residence Wellness Pool & Gym",
      "Bulletproof Glass and Secure Panic Room",
      "Valet Parking & Secure Underground Spaces",
    ],
    yearBuilt: 2021,
    agentId: "agent-4",
  },
  {
    id: "prop-6",
    name: "The Obsidian Corporate Plaza",
    type: "Commercial",
    location: "London",
    price: 85000000,
    area: 42000,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    ],
    description: "An iconic corporate headquarters tower in London's financial district, presenting state-of-the-art commercial luxury. Spanning over 42,000 square feet, the property features a triple-height lobby finished in white Carrara marble, an executive penthouse floor with luxury boardroom suites, an indoor executive golf simulator, and massive green sky-gardens. Built to the highest environmental LEED Gold standards with automated energy management.",
    features: [
      "Triple-Height Carrara Marble Lobby",
      "Executive Boardroom with Panoramic View",
      "Double-Decker Landscaped Rooftop Sky-Gardens",
      "LEED Gold Environmental Certification",
      "Secure Underground Parking for 40 Vehicles",
    ],
    yearBuilt: 2024,
    agentId: "agent-1",
  },
  {
    id: "prop-7",
    name: "Elysian Amalfi Cliff Parcel",
    type: "Plots",
    location: "Monaco",
    price: 9500000,
    area: 25000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
    description: "A rare and exclusive opportunity to acquire one of the last remaining seaside estate parcels in the region. Spanning 25,000 square feet of prime tiered cliffside property, this plot features panoramic vistas of the Mediterranean sea. The land is sold with fully approved, shovel-ready architectural designs created by an award-winning architectural firm for a stunning 8,500 sq ft glass and stone luxury villa, including permits for a cliffside elevator and beach club cove.",
    features: [
      "Fully Approved Architectural Plans & Permits",
      "Exclusive Cliffside Beach Cove Access",
      "Tiered Topography offering Unblocked Views",
      "Utilities & Deep Foundation Piling Completed",
      "Located in Elite Gated Residential Zone",
    ],
    yearBuilt: 2026,
    agentId: "agent-4",
  },
  {
    id: "prop-8",
    name: "Golden Crest Palm Villa",
    type: "Villa",
    location: "Dubai",
    price: 29000000,
    beds: 6,
    baths: 7,
    area: 12000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Located on the signature fronds of Palm Jumeirah, the Golden Crest Palm Villa is a premier luxury retreat. Spanning 12,000 sq ft, the villa features double-height spaces, a private yacht pontoon, an infinity pool lined with glass mosaic tiles, and high-end bespoke finishes. Hand-laid Italian marble floors and silk carpets run throughout the bedrooms. The rooftop terrace features a private cocktail lounge bar overlooking the Dubai skyline.",
    features: [
      "120 Feet of Private Sandy Beach Frontage",
      "Private Yacht Pontoon & Docking Permit",
      "Panoramic Views of Dubai Marina Skyline",
      "Bespoke Italian Kitchen & Wardrobes",
      "Rooftop VIP Sky Lounge & Cocktail Bar",
    ],
    yearBuilt: 2024,
    agentId: "agent-3",
  },
];
