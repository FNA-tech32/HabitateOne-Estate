"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  desc: string;
  image: string;
  label: string;
}

export default function WhyChooseUs() {
  const points: TimelineItem[] = [
    {
      label: "Phase 01",
      title: "Verified Properties",
      desc: "Every residence in our portfolio undergoes a rigorous 48-point check covering structural health, legal title clarity, and architectural integrity before listing. We guarantee only the finest assets represent our brand name.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Phase 02",
      title: "Trusted Private Brokers",
      desc: "Our advisors average 10+ years in ultra-luxury markets, specializing in private client representation, off-market matchmaking, and absolute transactional discretion.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Phase 03",
      title: "Legal & Wealth Advisory",
      desc: "In-house legal counsel coordinates cross-border capital transfers, trust structuring, tax optimization models, and compliance audits for secure real estate closing.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Phase 04",
      title: "Bespoke Financing Options",
      desc: "Leveraging our relationships with global private banking divisions and sovereign lenders, we help clients secure private capital facilities and customized mortgage structures.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Phase 05",
      title: "24/7 VIP Concierge Services",
      desc: "Access our dedicated private client desk for immediate relocation support, luxury asset shipping, yacht slip registration in Monaco, and private school admissions.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Phase 06",
      title: "Investment Curation",
      desc: "We deliver institutional-quality market studies, yield analysis, and tax efficiency modeling to protect and grow multi-generational family estates.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#FAF9F8] border-b border-luxury-border relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
            THE HABITATE STANDARD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal">
            Why Partner With <span className="italic font-normal text-bronze">Habitate Estate</span>
          </h2>
          <div className="w-12 h-[1px] bg-bronze mx-auto mt-4" />
          <p className="text-luxury-text-secondary text-sm font-light leading-relaxed">
            We deliver institutional advisory and bespoke concierge services that transcend basic real estate transactions.
          </p>
        </div>

        {/* Alternating Timeline List */}
        <div className="space-y-28 md:space-y-36">
          {points.map((pt, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-6 overflow-hidden rounded-2xl border border-luxury-border shadow-md aspect-[16/10] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={pt.image}
                    alt={pt.title}
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transform hover:scale-105 transition-all duration-700"
                  />
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? "lg:order-2 text-left" : "lg:order-1 text-left"
                  }`}
                >
                  <span className="text-bronze text-xs font-semibold tracking-[0.2em] uppercase">
                    {pt.label}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-wide text-charcoal">
                    {pt.title}
                  </h3>
                  
                  <div className="w-12 h-[1px] bg-luxury-border" />
                  
                  <p className="text-luxury-text-secondary text-sm sm:text-base font-light leading-relaxed tracking-wide">
                    {pt.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
