"use client";

import { Card } from "@/components/ui/card";
import { HourlyForecast } from "@/lib/weather-data";

interface RainChartProps {
  hourly: HourlyForecast[];
}

export function RainChart({ hourly }: RainChartProps) {
  const maxRain = Math.max(...hourly.map((h) => h.rainChance));

  return (
    <Card className="bg-[#1b1b1d] border-none rounded-[25px] p-6 sm:col-span-2">
      <h3 className="text-white text-xl font-medium mb-6">Chance Of Rain</h3>

      <div className="space-y-4">
        {/* Labels */}
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="w-12">Heavy</span>
          <div className="flex-1 border-t border-[#2a2a2f]"></div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="w-12">Sunny</span>
          <div className="flex-1 border-t border-[#2a2a2f]"></div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="w-12">Rainy</span>
          <div className="flex-1 border-t border-[#2a2a2f]"></div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-around gap-4 h-48 mt-6">
          {hourly.map((hour, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div className="flex-1 w-full flex items-end justify-center">
                <div className="relative w-2 h-full bg-[#232325] rounded-full overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full bg-[#bad4eb] rounded-full transition-all duration-500"
                    style={{
                      height: `${(hour.rainChance / maxRain) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-white">{hour.time}</span>
            </div>
          ))}
        </div>

        {/* Graph line */}
        <div className="relative h-24 mt-4">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            <polyline
              points={hourly
                .map((hour, index) => {
                  const x = (index / (hourly.length - 1)) * 300;
                  const y = 100 - (hour.rainChance / maxRain) * 80;
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="#bad4eb"
              strokeWidth="2"
            />
            {hourly.map((hour, index) => {
              const x = (index / (hourly.length - 1)) * 300;
              const y = 100 - (hour.rainChance / maxRain) * 80;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#bad4eb"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </Card>
  );
}
