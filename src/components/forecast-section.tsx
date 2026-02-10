import { Card } from '@/components/ui/card';
import { WeatherIcon } from '@/components/weather-icons';
import { ForecastDay } from '@/lib/weather-data';

interface ForecastSectionProps {
  forecast: ForecastDay[];
}

export function ForecastSection({ forecast }: ForecastSectionProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
      {forecast.map((day, index) => (
        <Card
          key={index}
          className="bg-[#1b1b1d] border-none rounded-3xl p-4 flex flex-col items-center justify-between min-h-[226px] hover:bg-[#232325] transition-colors"
        >
          {/* Temperature */}
          <div className="text-3xl font-semibold text-[#fdfdfd] mb-4">
            {day.temperature}°
          </div>

          {/* Weather Icon */}
          <div className="mb-4">
            <WeatherIcon type={day.icon} className="w-12 h-12" />
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-700 mb-4" />

          {/* Day Label */}
          <div className="text-base font-semibold text-[#e5e5e5]">
            {day.day}
          </div>
        </Card>
      ))}
    </div>
  );
}
