"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Bed, Bath, Maximize, Calendar, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Property, agentsData } from "@/data/properties";
import Button from "../ui/Button";

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetailModal({
  property,
  isOpen,
  onClose,
}: PropertyDetailModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");

  // Update active image when property changes
  useEffect(() => {
    if (property) {
      setActiveImage(property.image);
    }
  }, [property]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!property) return null;

  // Find agent
  const agent = agentsData.find((a) => a.id === property.agentId) || agentsData[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-6xl max-h-[85vh] bg-white border border-luxury-border overflow-y-auto z-10 rounded-2xl shadow-2xl flex flex-col md:flex-row scrollbar-thin text-charcoal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 border border-luxury-border hover:border-bronze hover:text-bronze text-charcoal/80 transition-colors duration-300 cursor-pointer rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image Gallery */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-luxury-border">
              <div className="space-y-4">
                {/* Main Large Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-luxury-border rounded-xl">
                  <img
                    src={activeImage}
                    alt={property.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/95 border border-luxury-border text-bronze text-[10px] tracking-widest uppercase font-sans font-semibold">
                    {property.type}
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[4/3] w-full overflow-hidden border cursor-pointer ${
                        activeImage === img ? "border-bronze rounded" : "border-luxury-border opacity-60 hover:opacity-100 rounded"
                      } transition-all duration-300`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 bg-[#FAF9F8] border border-luxury-border rounded-xl">
                {property.beds !== undefined && (
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Bed className="w-5 h-5 text-bronze mb-1" />
                    <span className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Bedrooms</span>
                    <span className="font-serif text-sm font-semibold text-charcoal">{property.beds} Beds</span>
                  </div>
                )}
                {property.baths !== undefined && (
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Bath className="w-5 h-5 text-bronze mb-1" />
                    <span className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Bathrooms</span>
                    <span className="font-serif text-sm font-semibold text-charcoal">{property.baths} Baths</span>
                  </div>
                )}
                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <Maximize className="w-5 h-5 text-bronze mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Total Area</span>
                  <span className="font-serif text-sm font-semibold text-charcoal">{property.area.toLocaleString()} Sq Ft</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <Calendar className="w-5 h-5 text-bronze mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-luxury-text-secondary">Year Built</span>
                  <span className="font-serif text-sm font-semibold text-charcoal">{property.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Contact Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Header Information */}
                <div className="border-b border-luxury-border pb-4 mb-4">
                  <div className="flex items-center text-xs text-luxury-text-secondary mb-2 font-sans tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-bronze mr-1.5" />
                    <span>{property.location}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-charcoal mb-2 leading-tight">
                    {property.name}
                  </h2>
                  <p className="font-serif text-2xl text-bronze font-semibold tracking-wider">
                    {formatPrice(property.price)}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-luxury-text-secondary leading-relaxed font-light font-sans">
                    {property.description}
                  </p>
                </div>

                {/* Premium Features */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold mb-3">
                    Premium Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-luxury-text-secondary">
                    {property.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent Representative & Inquiry Action */}
              <div className="border-t border-luxury-border pt-6 mt-4">
                <h4 className="text-xs uppercase tracking-widest text-bronze font-sans font-semibold mb-4">
                  Listing Representative
                </h4>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#FAF9F8] border border-luxury-border rounded-xl">
                  <div className="flex items-center space-x-4">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-12 h-12 rounded-full object-cover border border-bronze/20"
                    />
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-charcoal">{agent.name}</h5>
                      <p className="text-[10px] text-luxury-text-secondary tracking-wider uppercase font-sans">{agent.role}</p>
                      <p className="text-[10px] text-bronze font-medium mt-0.5">{agent.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <a href={`tel:${agent.phone}`} className="flex-1 sm:flex-none">
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5 mr-2" /> Call
                      </Button>
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex-1 sm:flex-none">
                      <Button variant="gold" size="sm" className="w-full flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5 mr-2" /> Email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
