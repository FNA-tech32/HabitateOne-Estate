"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "gold" | "outline" | "glass" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "gold",
  size = "md",
  children,
  className = "",
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-xs sm:text-sm",
    lg: "px-10 py-5 text-sm sm:text-base",
  };

  const variantStyles = {
    gold: "bg-charcoal text-white border border-charcoal hover:bg-bronze hover:border-bronze shadow-md font-bold transition-all duration-300",
    outline:
      "bg-transparent text-charcoal border border-charcoal/30 hover:border-bronze hover:text-bronze transition-all duration-300",
    glass:
      "bg-white/45 backdrop-blur-md text-charcoal border border-luxury-border hover:bg-white/80 hover:border-bronze hover:text-bronze transition-all duration-300",
    text: "bg-transparent text-charcoal hover:text-bronze px-0 py-0 border-none transition-all duration-300",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "text" ? 1.02 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
