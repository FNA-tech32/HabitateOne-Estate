"use client";

import React, { useState } from "react";
import { Search as SearchIcon, MapPin, DollarSign, BedDouble, Home } from "lucide-react";
import Button from "../ui/Button";

interface SearchFilters {
  location: string;
  budget: string;
  beds: string;
  type: string;
}

interface SearchProps {
  onSearch: (filters: SearchFilters) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "All",
    budget: "All",
    beds: "All",
    type: "All",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
    
    // Smooth scroll down to properties section to see results
    const target = document.getElementById("featured");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 -mt-16 sm:-mt-20 z-20">
      <form
        onSubmit={handleSearch}
        className="glass bg-white/90 backdrop-blur-xl border border-luxury-border p-6 sm:p-8 shadow-xl relative overflow-hidden"
      >
        {/* Subtle bronze highlight line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-bronze" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Filter 1: Location */}
          <div className="space-y-2">
            <label className="flex items-center text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              <MapPin className="w-3.5 h-3.5 mr-2" />
              Location
            </label>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full bg-[#FAF9F8] border border-luxury-border text-charcoal py-3.5 px-4 pr-10 text-xs sm:text-sm font-sans focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none appearance-none cursor-pointer"
              >
                <option value="All" className="bg-white text-charcoal">All Locations</option>
                <option value="Monaco" className="bg-white text-charcoal">Monaco</option>
                <option value="Beverly Hills" className="bg-white text-charcoal">Beverly Hills</option>
                <option value="Aspen" className="bg-white text-charcoal font-sans">Aspen</option>
                <option value="Dubai" className="bg-white text-charcoal">Dubai</option>
                <option value="London" className="bg-white text-charcoal">London</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter 2: Budget */}
          <div className="space-y-2">
            <label className="flex items-center text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              <DollarSign className="w-3.5 h-3.5 mr-1" />
              Budget Range
            </label>
            <div className="relative">
              <select
                value={filters.budget}
                onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                className="w-full bg-[#FAF9F8] border border-luxury-border text-charcoal py-3.5 px-4 pr-10 text-xs sm:text-sm font-sans focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none appearance-none cursor-pointer"
              >
                <option value="All" className="bg-white text-charcoal">Any Budget</option>
                <option value="under-15M" className="bg-white text-charcoal font-sans">Under $15M</option>
                <option value="15M-30M" className="bg-white text-charcoal font-sans">$15M - $30M</option>
                <option value="over-30M" className="bg-white text-charcoal font-sans">Over $30M</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter 3: Bedrooms */}
          <div className="space-y-2">
            <label className="flex items-center text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              <BedDouble className="w-3.5 h-3.5 mr-2" />
              Bedrooms
            </label>
            <div className="relative">
              <select
                value={filters.beds}
                onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
                className="w-full bg-[#FAF9F8] border border-luxury-border text-charcoal py-3.5 px-4 pr-10 text-xs sm:text-sm font-sans focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none appearance-none cursor-pointer"
              >
                <option value="All" className="bg-white text-charcoal">Any Bedrooms</option>
                <option value="3" className="bg-white text-charcoal font-sans">3+ Bedrooms</option>
                <option value="5" className="bg-white text-charcoal font-sans">5+ Bedrooms</option>
                <option value="6" className="bg-white text-charcoal font-sans">6+ Bedrooms</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter 4: Property Type */}
          <div className="space-y-2">
            <label className="flex items-center text-xs uppercase tracking-widest text-bronze font-sans font-semibold">
              <Home className="w-3.5 h-3.5 mr-2" />
              Property Type
            </label>
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full bg-[#FAF9F8] border border-luxury-border text-charcoal py-3.5 px-4 pr-10 text-xs sm:text-sm font-sans focus:outline-none focus:border-bronze transition-colors duration-300 rounded-none appearance-none cursor-pointer"
              >
                <option value="All" className="bg-white text-charcoal">Any Type</option>
                <option value="Villa" className="bg-white text-charcoal">Villa</option>
                <option value="Apartment" className="bg-white text-charcoal">Apartment</option>
                <option value="Penthouse" className="bg-white text-charcoal">Penthouse</option>
                <option value="Commercial" className="bg-white text-charcoal">Commercial</option>
                <option value="Plots" className="bg-white text-charcoal">Plots</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" variant="gold" className="w-full sm:w-auto px-12 py-4 flex items-center justify-center font-bold">
            <SearchIcon className="w-4 h-4 mr-2" />
            <span>Search Estates</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
