'use client';

import React from 'react';

/**
 * Animated Transitioning Background for ColorOz Painter & Decorator
 * Subtle architectural grid and heritage linen texture over warm surface gradient.
 */
export function ScrollingBackground() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes patternFadeGrid {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.03; }
        }
        .bg-animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 20s ease infinite;
        }
        .pattern-grid {
          animation: patternFadeGrid 12s ease-in-out infinite;
        }
      `}</style>
      <div 
        className="absolute inset-0 -z-20 pointer-events-none w-full min-h-full bg-animate-gradient"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 25%, #e7e5e4 50%, #f5f5f4 75%, #fafaf9 100%)',
        }}
      >
        {/* Heritage Architectural Grid */}
        <svg className="w-full h-full fixed pattern-grid" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heritage-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path fill="none" stroke="#78716c" strokeWidth="1" d="M60 0 L0 0 0 60" />
              <circle cx="0" cy="0" r="1.5" fill="#991b1b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heritage-grid)" />
        </svg>
      </div>
    </>
  );
}
