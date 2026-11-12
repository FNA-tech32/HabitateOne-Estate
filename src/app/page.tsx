"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Search from "@/components/sections/Search";
import About from "@/components/sections/About";
import Featured from "@/components/sections/Featured";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Agents from "@/components/sections/Agents";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppBtn from "@/components/floating/WhatsAppBtn";
import BackToTop from "@/components/floating/BackToTop";
import PropertyDetailModal from "@/components/sections/PropertyDetailModal";

import { Property, propertiesData } from "@/data/properties";

interface SearchFilters {
  location: string;
  budget: string;
  beds: string;
  type: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>(propertiesData);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Intro loader simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Search Logic
  const handleSearch = (filters: SearchFilters) => {
    let filtered = [...propertiesData];

    // Filter by Location
    if (filters.location !== "All") {
      filtered = filtered.filter(
        (p) => p.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    // Filter by Property Type
    if (filters.type !== "All") {
      filtered = filtered.filter(
        (p) => p.type.toLowerCase() === filters.type.toLowerCase()
      );
      // Auto-set the active category tab
      setActiveTab(filters.type);
    } else {
      setActiveTab("All");
    }

    // Filter by Bedrooms
    if (filters.beds !== "All") {
      const minBeds = parseInt(filters.beds, 10);
      filtered = filtered.filter((p) => p.beds !== undefined && p.beds >= minBeds);
    }

    // Filter by Budget Range
    if (filters.budget !== "All") {
      if (filters.budget === "under-15M") {
        filtered = filtered.filter((p) => p.price < 15000000);
      } else if (filters.budget === "15M-30M") {
        filtered = filtered.filter((p) => p.price >= 15000000 && p.price <= 30000000);
      } else if (filters.budget === "over-30M") {
        filtered = filtered.filter((p) => p.price > 30000000);
      }
    }

    setProperties(filtered);
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 1. Custom Bronze Splash Screen Loader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#FAF9F8] flex flex-col justify-center items-center font-serif text-charcoal"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4 text-center"
            >
              <h1 className="text-2xl sm:text-4xl tracking-[0.14em] font-extrabold text-charcoal">
                HABITATE <span className="text-bronze">ESTATE</span>
              </h1>
              <div className="h-[2px] w-24 bg-bronze mx-auto overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-charcoal"
                />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-luxury-text-secondary font-sans font-light">
                Legacies of Luxury
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex flex-col justify-between overflow-x-hidden w-full"
        >
          {/* Header Navigation */}
          <Navbar />

          <main className="flex-grow">
            {/* Hero Cover Screen */}
            <Hero />

            {/* Interactive Search Overlay */}
            <Search onSearch={handleSearch} />

            {/* Legacy Story */}
            <About />

            {/* Properties Listings */}
            <Featured
              properties={properties}
              onViewDetails={handleViewDetails}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Custom Modern Grid Values */}
            <WhyChooseUs />

            {/* Profile Directories */}
            <Agents />

            {/* Customer Reviews Carousel */}
            <Testimonials />

            {/* Blog insights */}
            <Insights />

            {/* Frequently Asked Questions */}
            <FAQ />

            {/* Architectural Map and Contact Forms */}
            <Contact />
          </main>

          {/* Premium Footer */}
          <Footer />

          {/* Floating Widget actions */}
          <WhatsAppBtn />
          <BackToTop />

          {/* Dedicated Property Detail Modal */}
          <PropertyDetailModal
            property={selectedProperty}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </motion.div>
      )}
    </>
  );
}
