import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { WeatherIcon } from '@/components/weather-icons';
import { CityWeather } from '@/lib/weather-data';

interface CitiesSidebarProps {
  cities: CityWeather[];
}

export function CitiesSidebar({ cities }: CitiesSidebarProps) {
  return (
    <Card className="bg-[#1b1b1d] border-[#2a2a2a] text-white h-full">
      <CardHeader className="border-b border-[#2a2a2a]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Other Cities</CardTitle>
          <button className="text-sm text-[#ffffff] hover:underline">See All</button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-[#2a2a2a]">
          {cities.map((city, index) => (
            <div
              key={index}
              className="p-4 hover:bg-[#232325] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-normal text-white mb-1">
                    {city.city}
                  </h3>
                  <p className="text-sm text-[#777777] mb-1">{city.country}</p>
                  <p className="text-sm text-[#efefef]">{city.condition}</p>
                </div>
                <div className="flex items-center gap-3">
                  <WeatherIcon type={city.icon} className="w-12 h-12" />
                  <div className="text-2xl font-semibold text-white">
                    {city.temperature}°
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
