"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Bed, Maximize, DollarSign } from "lucide-react";
import Button from "../ui/Button";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

// Minimal horizontal counter
function AnimatedCounter({ value, suffix, label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const totalFrames = 60 * duration;
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.round(start + (end - start) * easeOutExpo);

            setCount(currentCount);

            if (frame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  return (
    <div ref={countRef} className="flex flex-col items-start px-2 py-4">
      <span className="font-serif text-2xl sm:text-3xl font-bold text-bronze tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans font-light mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-luxury-bg pt-28 pb-12 overflow-hidden font-sans"
    >
      {/* Background Architectural Luxury Image with subtle desaturation overlay */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Architectural Villa"
          className="w-full h-full object-cover"
        />
        {/* Soft elegant gradient overlay to transition from image to content */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent max-lg:bg-charcoal/70" />
      </div>

      {/* Hero Content - Split Layout */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-white text-left"
          >
            <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
              Habitate Estate
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              Luxury Living <br />
              <span className="italic font-normal text-bronze">Designed Around You</span>
            </h1>
            <p className="max-w-xl font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Experience the pinnacle of architectural elegance. We curate millions-dollar estates, private waterfront sanctuaries, and off-market residential assets for the world’s most discerning portfolios.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href="#featured">
                <Button variant="gold" className="w-full sm:w-auto px-8 flex items-center justify-center font-semibold">
                  <span>View Properties</span>
                  <ArrowRight className="w-4 h-4 ml-2.5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="glass" className="w-full sm:w-auto px-8 flex items-center justify-center border-white/20 text-white hover:text-bronze">
                  <Calendar className="w-4 h-4 mr-2.5" />
                  <span>Book Consultation</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Property Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-end"
          >
            <div className="glass w-full max-w-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl border border-white/20 bg-white/75 text-charcoal">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-bronze block mb-2">
                Featured Acquisition
              </span>
              <h3 className="font-serif text-2xl tracking-wide text-charcoal mb-4">
                The Obsidian Villa
              </h3>
              
              <div className="space-y-3.5 text-xs text-luxury-text-secondary border-t border-luxury-border pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-2 text-bronze" /> Location</span>
                  <span className="font-semibold text-charcoal">Monte Carlo, Monaco</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><Bed className="w-3.5 h-3.5 mr-2 text-bronze" /> Bedrooms</span>
                  <span className="font-semibold text-charcoal">6 Bedrooms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><Maximize className="w-3.5 h-3.5 mr-2 text-bronze" /> Area</span>
                  <span className="font-semibold text-charcoal">11,200 Sq Ft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><DollarSign className="w-3.5 h-3.5 mr-2 text-bronze" /> Starting Price</span>
                  <span className="font-semibold text-bronze">$32,000,000</span>
                </div>
              </div>

              <a href="#featured">
                <Button variant="outline" className="w-full text-xs py-3.5 border-charcoal/20 hover:border-bronze">
                  Explore Masterpiece
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Statistics Panel (Below Hero Image) */}
      <div className="w-full bg-[#FAF9F8] border-t border-b border-luxury-border py-4 relative z-10 mt-12 lg:mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 justify-between">
            <AnimatedCounter value={480} suffix="+" label="Properties Sold" />
            <AnimatedCounter value={15} suffix="+" label="Countries" />
            <AnimatedCounter value={120} suffix="+" label="Luxury Listings" />
            <AnimatedCounter value={15} suffix=" Years" label="Years" />
            <div className="col-span-2 md:col-span-1">
              <AnimatedCounter value={950} suffix="+" label="Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
