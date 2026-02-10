"use client";

import { Card } from "@/components/ui/card";
import { WeatherIcon } from "@/components/weather-icons";
import { CityWeather } from "@/lib/weather-data";

interface CitiesSidebarProps {
  cities: CityWeather[];
}

export function CitiesSidebar({ cities }: CitiesSidebarProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-base font-medium">Other Cities</h2>
        <button className="text-white text-sm hover:text-[#bad4eb] transition-colors">
          See All
        </button>
      </div>

      {cities.map((city, index) => (
        <Card
          key={index}
          className="bg-[#1b1b1d] border-none rounded-[15px] p-4 hover:bg-[#25252a] transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white text-xl font-normal mb-1">
                {city.city}
              </h3>
              <p className="text-[#efefef] text-sm mb-1">{city.condition}</p>
              <p className="text-[#777777] text-sm">{city.country}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <WeatherIcon icon={city.icon} size={50} className="text-white" />
              </div>
              <span className="text-white text-2xl font-semibold">
                {city.temp}°
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
