"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, Phone, Calendar } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#featured" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Agents", href: "#agents" },
    { name: "Insights", href: "#insights" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-white border-b border-luxury-border shadow-sm text-charcoal"
            : "py-6 bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Branding */}
          <a href="#hero" className="group">
            <span className={`font-serif text-lg sm:text-xl tracking-[0.12em] font-bold transition-colors duration-300 ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}>
              HABITATE <span className="text-bronze">ESTATE</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`relative font-sans text-xs tracking-widest uppercase transition-colors duration-300 py-1 group ${
                  isScrolled ? "text-luxury-text-secondary hover:text-bronze" : "text-white/80 hover:text-bronze"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="#contact">
              <Button variant={isScrolled ? "gold" : "glass"} size="sm" className="flex items-center space-x-2">
                <PhoneCall className="w-3.5 h-3.5 mr-2" />
                <span>VIP Consult</span>
              </Button>
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-charcoal hover:text-bronze" : "text-white hover:text-bronze"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white border-l border-luxury-border p-6 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-6 border-b border-luxury-border">
                <span className="font-serif text-base tracking-[0.12em] font-bold text-charcoal">
                  HABITATE <span className="text-bronze">ESTATE</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-luxury-bg border border-luxury-border hover:border-bronze rounded-full text-charcoal/80 hover:text-bronze transition-colors duration-300 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Menu Links */}
              <div className="flex-grow py-8 overflow-y-auto">
                <nav className="flex flex-col space-y-5 text-left">
                  {navItems.map((item, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={idx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-xl tracking-wider uppercase text-charcoal hover:text-bronze transition-colors duration-300 py-1"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions Column */}
              <div className="pt-6 border-t border-luxury-border space-y-4">
                <a href="tel:+37793251100" className="block w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center py-4">
                    <Phone className="w-4 h-4 mr-2 text-bronze" />
                    <span>Call Concierge</span>
                  </Button>
                </a>
                
                <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button variant="gold" className="w-full flex items-center justify-center py-4 font-bold">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>VIP Consultation</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
