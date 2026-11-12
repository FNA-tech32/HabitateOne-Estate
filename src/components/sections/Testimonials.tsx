"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  story: string;
  text: string;
  image: string;
  stars: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "Jean-Louis Dupont",
      role: "Founder, Capital Group Monaco",
      story: "Sourcing a waterfront villa in Monte Carlo",
      text: "Habitate Estate provided an exemplary level of discretion and structural analysis. Alexander secured our Monaco cliffside property off-market, handling all maritime and cross-border tax compliance perfectly. A truly $20M+ standard service.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      stars: 5,
    },
    {
      id: "test-2",
      name: "Dr. Sarah Jenkins & Family",
      role: "Chief Medical Officer",
      story: "Relocating to Bel-Air Sanctuary",
      text: "Relocating a family with specific security needs was stressful until we partnered with Victoria. She coordinated the safe room audits, private school tours, and secured our Bel-Air estate $2M below listing value. Exquisite care.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      stars: 5,
    },
    {
      id: "test-3",
      name: "Khalid Al-Mansoori",
      role: "Managing Director, Al-Mansoori Holdings",
      story: "Expanding luxury beachfront portfolio",
      text: "Maximilian Romanov is the only broker in Dubai I trust. He has structured four residential waterfront acquisitions for my portfolio. His access to private off-plan allocations is unparalleled. Highly recommended.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-luxury-border relative font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
            CLIENT VENTURES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
            Success <span className="italic font-normal text-bronze">Stories</span>
          </h2>
          <div className="w-12 h-[1px] bg-bronze mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[350px] bg-white border border-luxury-border rounded-2xl p-8 sm:p-12 md:p-16 shadow-lg flex flex-col justify-between overflow-hidden">
          {/* Quote Icon Overlay */}
          <div className="absolute top-6 right-6 text-bronze/10">
            <Quote className="w-32 h-32 transform rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed font-light italic">
                "{current.text}"
              </blockquote>

              {/* Client Info Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-luxury-border">
                <div className="flex items-center space-x-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border border-bronze/20"
                  />
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-charcoal">
                      {current.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-luxury-text-secondary">{current.role}</p>
                  </div>
                </div>
                
                <div className="bg-[#FAF9F8] border border-luxury-border px-3.5 py-1.5 rounded-none">
                  <span className="text-[9px] uppercase tracking-widest text-bronze font-sans font-semibold">
                    {current.story}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-end space-x-4 mt-8 md:mt-0 relative z-20">
            <button
              onClick={handlePrev}
              className="p-3 border border-luxury-border bg-white text-charcoal/70 hover:border-bronze hover:text-bronze transition-colors duration-300 cursor-pointer shadow-sm rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-luxury-border bg-white text-charcoal/70 hover:border-bronze hover:text-bronze transition-colors duration-300 cursor-pointer shadow-sm rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
