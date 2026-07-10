import React from "react";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function PixelButton({ children, className = "", variant = "primary", ...props }: PixelButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-['Press_Start_2P'] text-[10px] md:text-xs uppercase tracking-widest px-6 py-4 border-4 transition-all active:translate-y-1 active:border-b-4";
  
  const variants = {
    primary: "bg-black text-[#00FF00] border-[#00FF00] hover:bg-[#00FF00] hover:text-black",
    secondary: "bg-black text-[#0099FF] border-[#0099FF] hover:bg-[#0099FF] hover:text-black"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
