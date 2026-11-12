"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#FAF9F8] border-b border-luxury-border overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Column 1: Story & Mission/Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
                OUR LEGACY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal leading-tight">
                Crafting Legacies of <span className="italic font-normal text-bronze">Luxury</span>
              </h2>
            </div>

            <p className="text-luxury-text-secondary text-sm sm:text-base font-light leading-relaxed tracking-wide">
              Established in 2011, Habitate Estate has redefined the paradigm of luxury real estate brokerage. We cater exclusively to private family trusts, high-net-worth investors, and family offices who demand absolute discretion, precise market intelligence, and off-market asset portfolios.
            </p>

            <p className="text-luxury-text-secondary text-sm font-light leading-relaxed tracking-wide">
              Our bespoke advisory treats real estate not merely as a transaction, but as a strategic asset class and a personal legacy. By partnering with award-winning architects and elite design firms, we ensure that every property we represent exceeds global standards of design.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Mission Card */}
              <div className="p-6 bg-white border border-luxury-border space-y-3 relative group hover:border-bronze/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-bronze transition-all duration-300 group-hover:h-full" />
                <div className="flex items-center space-x-3 text-bronze">
                  <Compass className="w-5 h-5" />
                  <h4 className="font-serif text-sm tracking-wider uppercase font-semibold text-charcoal">Our Mission</h4>
                </div>
                <p className="text-xs text-luxury-text-secondary font-light leading-relaxed">
                  To source the world's most exceptional properties while providing an elevated client experience rooted in integrity, discretion, and market foresight.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 bg-white border border-luxury-border space-y-3 relative group hover:border-bronze/40 transition-all duration-300">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-bronze transition-all duration-300 group-hover:h-full" />
                <div className="flex items-center space-x-3 text-bronze">
                  <Eye className="w-5 h-5" />
                  <h4 className="font-serif text-sm tracking-wider uppercase font-semibold text-charcoal">Our Vision</h4>
                </div>
                <p className="text-xs text-luxury-text-secondary font-light leading-relaxed">
                  To stand as the absolute global standard for elite real estate representation, transforming transactional agency into a legacy advisory service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Overlapping Luxury Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[450px] sm:h-[550px] w-full"
          >
            {/* Background luxury outline box */}
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-bronze/20 z-0 hidden sm:block" />

            {/* Major image (Luxury office) */}
            <div className="absolute top-0 left-0 w-[85%] h-[75%] overflow-hidden border border-luxury-border shadow-md z-10">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Habitate Estate London Office"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping minor image (Luxury villa kitchen) */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] overflow-hidden border border-luxury-border shadow-md z-20">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Premium Villa Interior Design"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 z-25 bg-white/95 border border-luxury-border p-4 sm:p-5 hidden sm:flex items-center space-x-3 backdrop-blur-md shadow-lg">
              <Award className="w-8 h-8 text-bronze flex-shrink-0" />
              <div>
                <p className="font-serif text-sm font-semibold text-charcoal">#1 Luxury Brokerage</p>
                <p className="text-[10px] text-luxury-text-secondary uppercase tracking-wider">Monaco Excellence 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
