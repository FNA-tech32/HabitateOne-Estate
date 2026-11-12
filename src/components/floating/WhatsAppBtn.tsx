"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 font-sans">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            className="absolute bottom-16 left-0 bg-white border border-luxury-border text-charcoal py-2.5 px-4 text-xs tracking-wider uppercase font-semibold whitespace-nowrap shadow-md rounded-xl"
          >
            {/* Green Online Dot */}
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            Concierge Online
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/442079462158?text=Hello%20Habitate%20Estate,%20I%20would%20like%20to%20inquire%20about%20your%20private%20listings."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-white hover:bg-bronze hover:text-white text-bronze border border-bronze/30 rounded-full shadow-lg shadow-bronze/5 backdrop-blur-md transition-colors duration-300 relative cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulsing indicator ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze/50 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-bronze"></span>
        </span>
      </motion.a>
    </div>
  );
}
