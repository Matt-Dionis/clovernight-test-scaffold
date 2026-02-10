import React from 'react';

interface WeatherIconProps {
  type: string;
  className?: string;
}

export function WeatherIcon({ type, className = "w-12 h-12" }: WeatherIconProps) {
  const icons: Record<string, React.ReactNode> = {
    "sunny": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="10" fill="#FFD700" />
        <path d="M25 5V10M25 40V45M45 25H40M10 25H5M38.5 38.5L35 35M15 15L11.5 11.5M38.5 11.5L35 15M15 35L11.5 38.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "sunny-windy": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" fill="#FFD700" />
        <path d="M30 15H45M30 25H42M30 35H40" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "rainy": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="25" cy="20" rx="15" ry="10" fill="#9CA3AF" />
        <path d="M15 30L12 40M25 30L22 40M35 30L32 40" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "rainy-sunny": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="15" r="7" fill="#FFD700" opacity="0.7" />
        <ellipse cx="28" cy="22" rx="12" ry="8" fill="#9CA3AF" />
        <path d="M18 32L16 40M28 32L26 40M38 32L36 40" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "windy": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15H35C38 15 40 17 40 20C40 23 38 25 35 25H10M5 25H25C28 25 30 27 30 30C30 33 28 35 25 35H5M10 35H40C43 35 45 33 45 30" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "snow": (
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="25" cy="18" rx="15" ry="10" fill="#D1D5DB" />
        <path d="M15 30L15 35M25 30L25 35M35 30L35 35M12 32L18 32M22 32L28 32M32 32L38 32" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[type] || icons["sunny"];
}
