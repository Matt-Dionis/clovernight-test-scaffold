import { Cloud, CloudDrizzle, CloudRain, Sun, Wind, CloudSnow } from "lucide-react";

interface WeatherIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export function WeatherIcon({ icon, size = 50, className = "" }: WeatherIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    "sunny": <Sun size={size} className={className} />,
    "sunny-windy": (
      <div className={`relative ${className}`}>
        <Sun size={size} className="absolute" />
        <Wind size={size * 0.6} className="absolute right-0 bottom-0 opacity-80" />
      </div>
    ),
    "rainy-sunny": (
      <div className={`relative ${className}`}>
        <Sun size={size * 0.8} className="absolute" />
        <CloudRain size={size} className="absolute right-0 bottom-0" />
      </div>
    ),
    "rainy": <CloudRain size={size} className={className} />,
    "windy": <Wind size={size} className={className} />,
    "cloudy": <Cloud size={size} className={className} />,
    "snow": <CloudSnow size={size} className={className} />,
  };

  return iconMap[icon] || <Sun size={size} className={className} />;
}
