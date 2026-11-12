"use client";

import React from "react";
import Accordion from "../ui/Accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What is the process for acquiring property in Monaco as a foreign national?",
      answer: "Monaco welcomes international buyers with no restrictive residency requirements for property ownership. The process involves signing a preliminary agreement (Compromis de Vente), placing a 10% deposit in a registered notary’s escrow account, undergoing standard background compliance (KYC), and final signing (Acte de Vente) which takes about 60 days.",
    },
    {
      question: "How do you handle client confidentiality during transactions?",
      answer: "Absolute confidentiality is the cornerstone of our advisory service. We work closely with family offices, private trusts, and corporate structures (LLCs/LDCs) to acquire properties without exposing the beneficial owner's name to public registers where legally permissible. All staff operate under strict NDAs.",
    },
    {
      question: "Can you source off-market properties that are not listed publicly?",
      answer: "Yes. Approximately 40% of our premium listings are held in our private off-market registry. These properties, ranging from historic French châteaux to contemporary beachfront villas in Palm Jumeirah, are only presented to pre-vetted private clients who have established search criteria and proof of funds.",
    },
    {
      question: "What legal support do you provide for cross-border capital transfers?",
      answer: "We partner with top-tier international private banking divisions and global law firms to manage high-volume currency conversions, verify source of wealth in compliance with international anti-money laundering (AML) regulations, and establish secure escrow trusts prior to transaction completion.",
    },
    {
      question: "Do you offer virtual walkthroughs and remote inspection services?",
      answer: "Absolutely. For our international clientele, we conduct private, high-definition live video walkthroughs, spatial 3D scans, and aerial drone mapping of both the property and surrounding neighborhood, ensuring you can make informed decisions from anywhere in the world.",
    },
    {
      question: "What are the typical transaction costs and purchase taxes?",
      answer: "Transaction costs vary by jurisdiction. In Monaco, notary fees and transfer registration duties average between 6% and 9% of the purchase price. In the United States (e.g., Beverly Hills), buyer closing costs (including escrow, title insurance, and mansion taxes) average between 1.5% and 3.5%.",
    },
    {
      question: "Can you assist with relocation, private schooling, and family office setup?",
      answer: "Yes, our VIP Concierge service goes beyond the transaction. We assist clients with residency applications, luxury vehicle importations, private school admissions for children, yacht slip acquisitions in Port Hercule, and introductions to elite wealth managers.",
    },
    {
      question: "How do you calculate potential rental yields for investment properties?",
      answer: "We conduct detailed market viability studies. We calculate net rental yields by factoring in historical seasonal occupancy rates, local property management fees (typically 10-15% of gross rent), specialized maintenance reserves, local taxes, and comprehensive insurance policies.",
    },
    {
      question: "What separates a 'Trophy Asset' from standard luxury real estate?",
      answer: "A trophy asset possesses unrepeatable attributes that insulate it from market volatility. This includes prime beachfront locations where further building is banned, properties designed by legendary historical architects, or sprawling parcels of land in highly restricted conservation areas.",
    },
    {
      question: "Do you support cryptocurrency transactions for property acquisitions?",
      answer: "Yes, we work with fully licensed escrow partners and private banking entities that facilitate legal, KYC-verified conversions of major cryptocurrencies (BTC, ETH, USDT) to fiat currency for real estate settlements, ensuring absolute regulatory compliance.",
    },
    {
      question: "How long does the purchasing cycle take from search to keys?",
      answer: "Cash purchases with pre-completed KYC can close in as little as 14 to 30 days. Transactions involving private banking finance structures, complex cross-border transfers, or property modifications generally require 60 to 90 days from the signing of the preliminary contract.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-luxury-border relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-bronze text-xs tracking-[0.25em] uppercase font-semibold">
            INFORMATION HUB
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-charcoal">
            Frequently Asked <span className="italic font-normal text-bronze">Questions</span>
          </h2>
          <div className="w-12 h-[1px] bg-bronze mx-auto mt-4" />
          <p className="text-luxury-text-secondary text-sm font-light leading-relaxed">
            Everything you need to know about purchasing and managing world-class estates through our brokerage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-8">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
