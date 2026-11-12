"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Villa",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Villa",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F8] border-b border-luxury-border relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
              ACQUISITION DEPT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
              Schedule A Private <span className="italic font-normal text-bronze">Consultation</span>
            </h2>
          </div>

          <p className="max-w-md text-luxury-text-secondary text-xs sm:text-sm font-light leading-relaxed">
            Connect with our private client team today. All inquiries are held in absolute secrecy and routed directly to our managing partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Panel: Location & Timings & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Timing */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-luxury-border text-bronze mt-1 rounded-2xl shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal tracking-wide">Office Timings</h4>
                  <p className="text-xs sm:text-sm text-luxury-text-secondary font-light mt-1">
                    Monday - Saturday: 9:00 AM - 6:00 PM (GMT)
                  </p>
                  <p className="text-[11px] text-bronze tracking-wide mt-0.5 font-medium">
                    Sunday: Closed (By private appointment only)
                  </p>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-luxury-border text-bronze mt-1 rounded-2xl shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal tracking-wide">Habitate Estate</h4>
                  <p className="text-xs sm:text-sm text-luxury-text-secondary font-light mt-1">
                    27 Berkeley Square, Mayfair, London W1J 6ER, United Kingdom
                  </p>
                </div>
              </div>

              {/* VIP Hotline */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-luxury-border text-bronze mt-1 rounded-2xl shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal tracking-wide">VIP Private Line</h4>
                  <a href="tel:+442079462158" className="text-xs sm:text-sm text-luxury-text-secondary hover:text-bronze transition-colors duration-300 font-light block mt-1">
                    +44 20 7946 2158
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-luxury-border text-bronze mt-1 rounded-2xl shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal tracking-wide">Direct Encrypted Email</h4>
                  <a href="mailto:contact@habitateestate.com" className="text-xs sm:text-sm text-luxury-text-secondary hover:text-bronze transition-colors duration-300 font-light block mt-1">
                    contact@habitateestate.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-container relative w-full h-[220px] sm:h-[280px] border border-luxury-border rounded-2xl overflow-hidden mt-4 shadow-sm">
              <iframe
                title="Habitate Estate Map"
                src="https://maps.google.com/maps?q=27%20Berkeley%20Square%2C%20Mayfair%2C%20London%20W1J%206ER&z=16&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Panel: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-luxury-border rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center shadow-md">
            {/* Top bronze line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-bronze" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans block font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="e.g. Jean-Louis Dupont"
                        className="w-full px-4 py-3.5 bg-[#FAF9F8] border border-luxury-border text-charcoal placeholder-charcoal/30 text-xs sm:text-sm focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans block font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="e.g. dupont@capital.mc"
                        className="w-full px-4 py-3.5 bg-[#FAF9F8] border border-luxury-border text-charcoal placeholder-charcoal/30 text-xs sm:text-sm focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans block font-medium">
                        Private Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +44 20 7946 2158"
                        className="w-full px-4 py-3.5 bg-[#FAF9F8] border border-luxury-border text-charcoal placeholder-charcoal/30 text-xs sm:text-sm focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none"
                      />
                    </div>

                    {/* Interest Dropdown */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans block font-medium">
                        Asset Class Interest
                      </label>
                      <div className="relative">
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-[#FAF9F8] border border-luxury-border text-charcoal py-3.5 px-4 pr-10 text-xs sm:text-sm focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none appearance-none cursor-pointer"
                        >
                          <option value="Villa" className="bg-white text-charcoal">Luxury Villa</option>
                          <option value="Apartment" className="bg-white text-charcoal">Luxury Apartment</option>
                          <option value="Penthouse" className="bg-white text-charcoal">Elite Penthouse</option>
                          <option value="Commercial" className="bg-white text-charcoal">Commercial Trophy</option>
                          <option value="Plots" className="bg-white text-charcoal">Land Plot Parcel</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-luxury-text-secondary font-sans block font-medium">
                      Message & Confidential Requests
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="Please specify any particular parameters or privacy protocols..."
                      className="w-full px-4 py-3.5 bg-[#FAF9F8] border border-luxury-border text-charcoal placeholder-charcoal/30 text-xs sm:text-sm focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" className="w-full flex items-center justify-center font-bold">
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Secure Inquiry</span>
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="p-4 bg-bronze/10 border border-bronze/30 rounded-full text-bronze">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal tracking-wide">Inquiry Safely Routed</h3>
                  <p className="text-luxury-text-secondary text-xs sm:text-sm font-light max-w-md leading-relaxed">
                    Thank you. Your inquiry has been encrypted and routed directly to our managing partners. A private client advisor will make contact via secure protocols within two hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
