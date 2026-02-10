import { Card } from '@/components/ui/card';
import { WeatherIcon } from '@/components/weather-icons';
import { WeatherData } from '@/lib/weather-data';

interface CurrentWeatherCardProps {
  weather: WeatherData;
}

export function CurrentWeatherCard({ weather }: CurrentWeatherCardProps) {
  return (
    <Card className="bg-gradient-to-br from-[#bbd7ec] to-[#aecadf] border-none p-6 text-[#0f0f11]">
      {/* Date/Time Header */}
      <div className="bg-[#aecadf] -mx-6 -mt-6 px-6 py-4 mb-6 rounded-t-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Friday</h2>
          <span className="text-base font-semibold">{weather.time}</span>
        </div>
      </div>

      {/* Temperature and Icon */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-4xl font-semibold">{weather.temperature}°</div>
        <div className="w-16 h-14 flex items-center justify-center">
          <WeatherIcon type={weather.icon} className="w-full h-full" />
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
        <div>Sunrise {weather.sunrise}</div>
        <div>Real Feel {weather.realFeel}°</div>
        <div>Wind {weather.wind}</div>
        <div>Pressure {weather.pressure}</div>
        <div>Humidity {weather.humidity}%</div>
        <div>Sunset {weather.sunset}</div>
      </div>
    </Card>
  );
}
