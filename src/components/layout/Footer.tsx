"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "../ui/SocialIcons";
import Button from "../ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-white border-t border-luxury-border pt-20 pb-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Column 1: Branding and Ethos */}
        <div className="space-y-6">
          <span className="font-serif text-xl tracking-[0.12em] font-bold text-charcoal">
            HABITATE <span className="text-bronze">ESTATE</span>
          </span>
          <p className="text-luxury-text-secondary text-sm leading-relaxed font-light">
            Crafting legacies of luxury, we offer the most exclusive real estate listings in the world’s most prestigious locations. Experience bespoke concierge real estate support.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" className="p-2 border border-luxury-border rounded-full hover:border-bronze hover:text-bronze transition-colors duration-300 text-charcoal/70 bg-[#FAF9F8]">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-2 border border-luxury-border rounded-full hover:border-bronze hover:text-bronze transition-colors duration-300 text-charcoal/70 bg-[#FAF9F8]">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" className="p-2 border border-luxury-border rounded-full hover:border-bronze hover:text-bronze transition-colors duration-300 text-charcoal/70 bg-[#FAF9F8]">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" className="p-2 border border-luxury-border rounded-full hover:border-bronze hover:text-bronze transition-colors duration-300 text-charcoal/70 bg-[#FAF9F8]">
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg tracking-wider text-charcoal font-medium">Quick Links</h4>
          <ul className="space-y-3 text-sm text-luxury-text-secondary font-light">
            <li>
              <a href="#about" className="hover:text-bronze transition-colors duration-300">Our Story</a>
            </li>
            <li>
              <a href="#featured" className="hover:text-bronze transition-colors duration-300">Featured Properties</a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-bronze transition-colors duration-300">Why Choose Us</a>
            </li>
            <li>
              <a href="#agents" className="hover:text-bronze transition-colors duration-300">Meet Our Brokers</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-bronze transition-colors duration-300">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Info */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg tracking-wider text-charcoal font-medium">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-luxury-text-secondary font-light">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-bronze mt-1 flex-shrink-0" />
              <span>Habitate Estate, 27 Berkeley Square, Mayfair, London W1J 6ER, United Kingdom</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-bronze flex-shrink-0" />
              <a href="tel:+442079462158" className="hover:text-bronze transition-colors duration-300">+44 20 7946 2158</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-bronze flex-shrink-0" />
              <a href="mailto:contact@habitateestate.com" className="hover:text-bronze transition-colors duration-300">contact@habitateestate.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg tracking-wider text-charcoal font-medium">Newsletter</h4>
          <p className="text-luxury-text-secondary text-sm leading-relaxed font-light">
            Subscribe to receive exclusive listings and private market intelligence briefs.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-[#FAF9F8] border border-luxury-border text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-bronze transition-colors duration-300"
            />
            <Button type="submit" variant="gold" className="w-full text-xs">
              Subscribe
            </Button>
          </form>
          {subscribed && (
            <p className="text-xs text-bronze animate-pulse font-light">
              Welcome to the inner circle. Subscription confirmed.
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-luxury-border text-center text-xs text-luxury-text-secondary/60 font-light flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} Habitate Estate. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-bronze transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-bronze transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-bronze transition-colors duration-300">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
