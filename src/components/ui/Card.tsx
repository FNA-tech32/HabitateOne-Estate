"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Heart, MapPin } from "lucide-react";
import { Property } from "@/data/properties";
import Button from "./Button";

interface CardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export default function Card({ property, onViewDetails }: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Formatting price to USD string
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col bg-white border border-luxury-border rounded-2xl hover:shadow-xl hover:border-bronze/30 transition-all duration-500 overflow-hidden"
    >
      {/* Property Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Hover zoom image */}
        <motion.img
          src={property.image}
          alt={property.name}
          className="object-cover w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Absolute Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-40" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 border border-luxury-border text-bronze text-[10px] tracking-widest uppercase font-sans font-semibold">
            {property.type}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 border border-luxury-border hover:border-bronze hover:text-bronze transition-colors duration-300 cursor-pointer text-charcoal"
        >
          <motion.div whileTap={{ scale: 0.8 }} transition={{ duration: 0.2 }}>
            <Heart
              className={`w-4 h-4 transition-colors duration-300 ${
                isFavorite ? "fill-bronze text-bronze" : "text-charcoal/80"
              }`}
            />
          </motion.div>
        </button>
      </div>

      {/* Property Information */}
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          {/* Location info */}
          <div className="flex items-center text-xs text-luxury-text-secondary mb-2 font-sans tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-bronze mr-1.5 flex-shrink-0" />
            <span>{property.location}</span>
          </div>

          {/* Property Name */}
          <h3 className="font-serif text-lg md:text-xl tracking-wide text-charcoal group-hover:text-bronze transition-colors duration-300 line-clamp-1 mb-2">
            {property.name}
          </h3>

          {/* Price */}
          <p className="font-serif text-xl text-bronze font-semibold tracking-wide mb-4">
            {formatPrice(property.price)}
          </p>
        </div>

        <div>
          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-luxury-border mb-5 text-xs text-luxury-text-secondary">
            {property.beds !== undefined && (
              <div className="flex items-center space-x-1.5">
                <Bed className="w-4 h-4 text-bronze flex-shrink-0" />
                <span>{property.beds} Beds</span>
              </div>
            )}
            {property.baths !== undefined && (
              <div className="flex items-center space-x-1.5">
                <Bath className="w-4 h-4 text-bronze flex-shrink-0" />
                <span>{property.baths} Baths</span>
              </div>
            )}
            <div className="flex items-center space-x-1.5 col-span-1">
              <Maximize className="w-4 h-4 text-bronze flex-shrink-0" />
              <span>{property.area.toLocaleString()} Sq Ft</span>
            </div>
          </div>

          {/* Action Trigger */}
          <Button
            variant="outline"
            className="w-full text-xs py-3"
            onClick={() => onViewDetails(property)}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
