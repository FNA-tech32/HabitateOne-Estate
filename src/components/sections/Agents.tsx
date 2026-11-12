"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons";
import { agentsData } from "@/data/properties";

export default function Agents() {
  return (
    <section id="agents" className="py-24 bg-white border-b border-luxury-border relative font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
              HABITATE ADVISORS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
              Meet Our Private <span className="italic font-normal text-bronze">Brokers</span>
            </h2>
          </div>

          <p className="max-w-md text-luxury-text-secondary text-xs sm:text-sm font-light leading-relaxed">
            Our multi-lingual advisors specialize in discrete representation, wealth optimization, and custom portfolio curation in key global luxury capitals.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentsData.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-luxury-border rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-bronze/30 transition-all duration-500"
            >
              {/* Agent Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-luxury-border">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Hover white glass overlay for socials */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/75 backdrop-blur-[2px]">
                  <div className="flex space-x-3">
                    {agent.socials.linkedin && (
                      <a
                        href={agent.socials.linkedin}
                        target="_blank"
                        className="p-3 border border-luxury-border bg-white rounded-full text-charcoal hover:border-bronze hover:text-bronze hover:shadow-sm transition-all duration-300"
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {agent.socials.instagram && (
                      <a
                        href={agent.socials.instagram}
                        target="_blank"
                        className="p-3 border border-luxury-border bg-white rounded-full text-charcoal hover:border-bronze hover:text-bronze hover:shadow-sm transition-all duration-300"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {agent.socials.twitter && (
                      <a
                        href={agent.socials.twitter}
                        target="_blank"
                        className="p-3 border border-luxury-border bg-white rounded-full text-charcoal hover:border-bronze hover:text-bronze hover:shadow-sm transition-all duration-300"
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Agent Information */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-lg tracking-wide text-charcoal group-hover:text-bronze transition-colors duration-300">
                    {agent.name}
                  </h3>
                  <p className="text-[10px] text-luxury-text-secondary tracking-wider uppercase font-sans mt-0.5 font-medium">
                    {agent.role}
                  </p>
                  <p className="text-[10px] text-bronze tracking-wider uppercase mt-1 font-semibold">
                    {agent.experience}
                  </p>
                </div>

                <div className="pt-3 border-t border-luxury-border space-y-3 text-xs text-luxury-text-secondary">
                  <p className="font-sans font-light">
                    <span className="text-charcoal/50 uppercase tracking-widest text-[9px] block mb-0.5">Speciality</span>
                    {agent.specialization}
                  </p>
                  
                  {/* Direct Contact Action Row */}
                  <div className="flex justify-between items-center pt-2 gap-2">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex-1 flex items-center justify-center py-2.5 bg-[#FAF9F8] border border-luxury-border hover:border-bronze/50 hover:text-bronze text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer font-medium text-charcoal"
                    >
                      <Phone className="w-3 h-3 mr-1.5 text-bronze" /> Call
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex-1 flex items-center justify-center py-2.5 bg-[#FAF9F8] border border-luxury-border hover:border-bronze/50 hover:text-bronze text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer font-medium text-charcoal"
                    >
                      <Mail className="w-3 h-3 mr-1.5 text-bronze" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
