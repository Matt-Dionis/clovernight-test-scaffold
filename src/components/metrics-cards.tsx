"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplets, Eye, Gauge, Sun } from "lucide-react";

interface MetricsCardsProps {
  wind: {
    speed: number;
    direction: string;
  };
  humidity: number;
  visibility: number;
  uvIndex: number;
}

export function MetricsCards({ wind, humidity, visibility, uvIndex }: MetricsCardsProps) {
  return (
    <>
      {/* Wind Status */}
      <Card className="bg-[#1b1b1d] border-none rounded-[25px] p-6">
        <div className="flex items-start gap-3 mb-4">
          <Gauge className="text-[#bad4eb] w-6 h-6" />
          <div>
            <h3 className="text-[#818085] text-sm font-medium">Wind Status</h3>
            <p className="text-white text-2xl font-semibold mt-1">
              {wind.speed} <span className="text-lg">km/h</span>
            </p>
            <p className="text-[#818085] text-sm mt-1">{wind.direction}</p>
          </div>
        </div>
        <div className="relative w-32 h-32 mx-auto mt-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#232325"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#bad4eb"
              strokeWidth="8"
              strokeDasharray={`${(wind.speed / 20) * 251.2} 251.2`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-xl font-semibold">{wind.speed}</div>
              <div className="text-[#818085] text-xs">km/h</div>
            </div>
          </div>
        </div>
      </Card>

      {/* UV Index */}
      <Card className="bg-[#1b1b1d] border-none rounded-[25px] p-6">
        <div className="flex items-start gap-3 mb-4">
          <Sun className="text-[#bad4eb] w-6 h-6" />
          <div className="flex-1">
            <h3 className="text-[#818085] text-sm font-medium">UV Index</h3>
            <p className="text-white text-2xl font-semibold mt-1">{uvIndex}</p>
            <p className="text-[#818085] text-sm mt-1">Moderate</p>
          </div>
        </div>
        <div className="mt-4">
          <Progress value={(uvIndex / 11) * 100} className="h-2 bg-[#232325]" />
          <div className="flex justify-between text-xs text-[#818085] mt-2">
            <span>0</span>
            <span>11</span>
          </div>
        </div>
      </Card>

      {/* Humidity */}
      <Card className="bg-[#1b1b1d] border-none rounded-[25px] p-6">
        <div className="flex items-start gap-3">
          <Droplets className="text-[#bad4eb] w-6 h-6" />
          <div>
            <h3 className="text-[#818085] text-sm font-medium">Humidity</h3>
            <p className="text-white text-3xl font-semibold mt-2">
              {humidity}<span className="text-xl">%</span>
            </p>
            <p className="text-[#818085] text-sm mt-2">Normal</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="relative w-24 h-24 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#232325"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#bad4eb"
                strokeWidth="6"
                strokeDasharray={`${(humidity / 100) * 219.8} 219.8`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
        </div>
      </Card>

      {/* Visibility */}
      <Card className="bg-[#1b1b1d] border-none rounded-[25px] p-6">
        <div className="flex items-start gap-3">
          <Eye className="text-[#bad4eb] w-6 h-6" />
          <div>
            <h3 className="text-[#818085] text-sm font-medium">Visibility</h3>
            <p className="text-white text-3xl font-semibold mt-2">
              {visibility} <span className="text-xl">km</span>
            </p>
            <p className="text-[#818085] text-sm mt-2">Good</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <Eye className="w-full h-full text-[#bad4eb] opacity-30" />
          </div>
        </div>
      </Card>
    </>
  );
}
