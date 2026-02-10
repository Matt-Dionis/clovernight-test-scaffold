"use client";

import { Card } from "@/components/ui/card";
import { WeatherIcon } from "@/components/weather-icons";
import { WeatherData } from "@/lib/weather-data";

interface CurrentWeatherProps {
  data: WeatherData;
}

export function CurrentWeather({ data }: CurrentWeatherProps) {
  const { current } = data;

  return (
    <Card className="bg-[#bbd7ec] border-none rounded-[25px] p-6">
      <div className="flex flex-col h-full">
        {/* Date/Time Header */}
        <div className="bg-[#aecadf] -mx-6 -mt-6 px-6 py-3 rounded-t-[25px] flex justify-between items-center mb-6">
          <span className="text-[#0f0f11] font-semibold">Friday</span>
          <span className="text-[#0f0f11] font-semibold">11:45 AM</span>
        </div>

        {/* Temperature and Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[#0f0f11] text-5xl font-semibold">
            {current.temp}°
          </div>
          <div className="w-16 h-16">
            <WeatherIcon icon={current.icon} size={64} className="text-[#0f0f11]" />
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-[#0f0f11] text-xs font-semibold">
            Sunrise {current.sunrise}
          </div>
          <div className="text-[#0f0f11] text-xs font-semibold">
            Real Feel {current.feelsLike}°
          </div>
          <div className="text-[#0f0f11] text-xs font-semibold">
            Wind {current.wind.direction}. {current.wind.speed}km/h
          </div>
          <div className="text-[#0f0f11] text-xs font-semibold">
            Pressure {current.pressure}MB
          </div>
          <div className="text-[#0f0f11] text-xs font-semibold">
            Humidity {current.humidity}%
          </div>
          <div className="text-[#0f0f11] text-xs font-semibold">
            Sunset {current.sunset}
          </div>
        </div>
      </div>
    </Card>
  );
}
