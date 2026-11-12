"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="border-b border-luxury-border overflow-hidden transition-colors duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group cursor-pointer"
            >
              <span
                className={`font-serif text-lg md:text-xl tracking-wide transition-colors duration-300 ${
                  isOpen ? "text-bronze" : "text-charcoal group-hover:text-bronze"
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ml-4 p-1.5 border rounded-full transition-colors duration-300 ${
                  isOpen
                    ? "border-bronze text-bronze bg-[#FAF9F8]"
                    : "border-luxury-border text-luxury-text-secondary group-hover:border-bronze/50 group-hover:text-bronze"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: "easeOut" },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: "easeIn" },
                      opacity: { duration: 0.15 },
                    },
                  }}
                >
                  <div className="pb-6 pr-6 text-sm md:text-base text-luxury-text-secondary leading-relaxed font-sans font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
