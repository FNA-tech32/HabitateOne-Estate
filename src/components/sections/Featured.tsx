"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Property } from "@/data/properties";
import Card from "../ui/Card";

interface FeaturedProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Featured({
  properties,
  onViewDetails,
  activeTab,
  setActiveTab,
}: FeaturedProps) {
  const tabs = ["All", "Villa", "Apartment", "Penthouse", "Commercial", "Plots"];

  // Filter properties based on the active tab
  const filteredProperties =
    activeTab === "All"
      ? properties
      : properties.filter((p) => p.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="featured" className="py-24 bg-white border-b border-luxury-border font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
              FEATURED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
              Exceptional <span className="italic font-normal text-bronze">Properties</span>
            </h2>
          </div>
          
          <p className="max-w-md text-luxury-text-secondary text-xs sm:text-sm font-light leading-relaxed">
            Explore our curated catalog of premier real estate listings. Every home is vetted by our private council to assure elite structural and design criteria.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-luxury-border pb-4 mb-10 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-bronze font-semibold" : "text-luxury-text-secondary hover:text-charcoal"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Properties Cards Grid */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProperties.map((property) => (
                  <motion.div
                    layout
                    key={property.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card property={property} onViewDetails={onViewDetails} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-luxury-bg border border-luxury-border rounded-2xl"
              >
                <p className="font-serif text-lg sm:text-xl text-charcoal/80 mb-2">No Properties Found</p>
                <p className="text-xs text-luxury-text-secondary max-w-sm">
                  We currently do not have listings matching those filter options. Try resetting your search parameters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
