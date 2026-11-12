"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface Article {
  id: string;
  category: "Investment Tips" | "Buying Guide" | "Selling Guide";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export default function Insights() {
  const articles: Article[] = [
    {
      id: "art-1",
      category: "Investment Tips",
      title: "Navigating the 2026 Global Luxury Market: Yields & Tax Optimization",
      excerpt: "An in-depth analysis of high-yield zones, capital gain shelters, and trust structuring strategies for private portfolios in Monaco, Switzerland, and Dubai.",
      date: "July 24, 2026",
      readTime: "6 Min Read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "art-2",
      category: "Buying Guide",
      title: "The Private Client Guide to Cross-Border Trophy Estate Acquisitions",
      excerpt: "Essential compliance guidelines, private banking escrow protocols, and legal representation models for high-net-worth foreign buyers.",
      date: "June 18, 2026",
      readTime: "8 Min Read",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "art-3",
      category: "Selling Guide",
      title: "Maximizing Portfolio Liquidity: Strategic Placement of Trophy Assets",
      excerpt: "How discrete off-market campaigns, custom architectural staging, and sovereign wealth representation can compress transaction cycles.",
      date: "May 29, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="insights" className="py-24 bg-[#FAF9F8] border-b border-luxury-border relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
              MARKET INTELLIGENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
              Luxury Real Estate <span className="italic font-normal text-bronze">Insights</span>
            </h2>
          </div>

          <p className="max-w-md text-luxury-text-secondary text-xs sm:text-sm font-light leading-relaxed">
            Stay informed with our private client market briefs, architectural guides, and wealth preservation reports published by our global research council.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group bg-white border border-luxury-border rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-bronze/30 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-luxury-border">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 border border-luxury-border text-bronze text-[9px] tracking-widest uppercase font-semibold">
                  {art.category}
                </span>
              </div>

              {/* Content Panel */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Meta stats */}
                  <div className="flex items-center space-x-4 text-[10px] text-luxury-text-secondary uppercase tracking-widest">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 text-bronze mr-1.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 text-bronze mr-1.5" />
                      {art.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-charcoal group-hover:text-bronze transition-colors duration-300 line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-luxury-text-secondary text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Call-to-action link */}
                <div className="pt-4 border-t border-luxury-border">
                  <span className="inline-flex items-center text-xs uppercase tracking-widest text-bronze group-hover:text-bronze-hover transition-colors duration-300 font-semibold cursor-pointer">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
