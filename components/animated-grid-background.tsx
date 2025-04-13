import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridBackgroundProps {
  className?: string;
}

export function AnimatedGridBackground({ className }: AnimatedGridBackgroundProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.500/20),theme(colors.background))]" />
      
      {/* Grid with custom CSS for the pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      >
        {/* Horizontal animated line */}
        <div 
          className="absolute left-0 top-1/2 h-px w-full bg-[linear-gradient(to_right,transparent,theme(colors.foreground/50),transparent)]"
          style={{
            animation: 'grid-line-x 15s linear infinite'
          }}
        />
        
        {/* Vertical animated line */}
        <div 
          className="absolute left-1/2 top-0 h-full w-px bg-[linear-gradient(to_bottom,transparent,theme(colors.foreground/50),transparent)]"
          style={{
            animation: 'grid-line-y 15s linear infinite'
          }}
        />
      </div>

      {/* Adding the animations through a style tag */}
      <style jsx>{`
        @keyframes grid-line-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes grid-line-y {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
} 