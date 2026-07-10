import React from "react";

interface PixelContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "neutral";
}

interface PixelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "neutral";
}

export function PixelContainer({ children, className = "", variant = "neutral", ...rest }: PixelContainerProps) {
  let borderColor = "border-[#C0C0C0]";
  
  if (variant === "primary") borderColor = "border-[#00FF00]";
  if (variant === "secondary") borderColor = "border-[#0099FF]";

  return (
    <div className={`relative bg-black border-4 ${borderColor} p-4 md:p-6 ${className}`} {...rest}>
      {/* Inner shadow/highlight for retro depth effect */}
      <div className="absolute inset-0 border-2 border-white/10 pointer-events-none" />
      {children}
    </div>
  );
}
