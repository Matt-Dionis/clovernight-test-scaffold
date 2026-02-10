"use client";

import { Card } from "@/components/ui/card";
import { WeatherIcon } from "@/components/weather-icons";
import { DayForecast } from "@/lib/weather-data";

interface ForecastCardProps {
  forecast: DayForecast;
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <Card className="bg-[#1b1b1d] border-none rounded-[30px] p-4 hover:bg-[#25252a] transition-colors">
      <div className="flex flex-col items-center space-y-4">
        <span className="text-[#e5e5e5] text-base font-semibold">
          {forecast.day}
        </span>

        <div className="w-12 h-12 flex items-center justify-center">
          <WeatherIcon icon={forecast.icon} size={50} className="text-white" />
        </div>

        <div className="w-full border-t border-[#2a2a2f]"></div>

        <span className="text-[#fdfdfd] text-2xl font-semibold">
          {forecast.temp}°
        </span>
      </div>
    </Card>
  );
}
