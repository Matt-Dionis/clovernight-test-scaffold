import { DashboardHeader } from '@/components/dashboard-header';
import { CurrentWeatherCard } from '@/components/current-weather-card';
import { ForecastSection } from '@/components/forecast-section';
import { RainChanceChart } from '@/components/rain-chance-chart';
import { WeatherMetrics } from '@/components/weather-metrics';
import { CitiesSidebar } from '@/components/cities-sidebar';
import {
  currentWeather,
  sevenDayForecast,
  hourlyRainChance,
  otherCities
} from '@/lib/weather-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111015] text-white p-4 md:p-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <DashboardHeader />

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <button className="text-[#818085] hover:text-white transition-colors text-lg">
              Today
            </button>
            <button className="text-[#818085] hover:text-white transition-colors text-lg">
              Tomorrow
            </button>
            <button className="text-white font-medium text-lg border-b-2 border-white pb-1">
              Next 7days
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1e1e1e] rounded-2xl overflow-hidden">
              <button className="px-6 py-2 bg-[#bbd7ec] text-[#1e1e1e] text-xs font-medium rounded-2xl">
                Forecast
              </button>
              <button className="px-6 py-2 text-[#818085] text-xs font-medium">
                Air Quality
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Today's Overview Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Today's Overview</h2>
            </div>

            {/* Current Weather and 7-Day Forecast */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Current Weather */}
              <div className="lg:col-span-1">
                <CurrentWeatherCard weather={currentWeather} />
              </div>

              {/* 7-Day Forecast */}
              <div className="lg:col-span-3">
                <ForecastSection forecast={sevenDayForecast} />
              </div>
            </div>

            {/* Weather Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <WeatherMetrics
                wind={currentWeather.wind}
                uvIndex={currentWeather.uvIndex}
                humidity={currentWeather.humidity}
                visibility={currentWeather.visibility}
              />
            </div>

            {/* Rain Chance Chart - Only visible on larger screens */}
            <div className="lg:hidden">
              <RainChanceChart data={hourlyRainChance} />
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Rain Chance Chart - Desktop */}
            <div className="hidden lg:block">
              <RainChanceChart data={hourlyRainChance} />
            </div>

            {/* Other Cities */}
            <CitiesSidebar cities={otherCities} />
          </div>
        </div>
      </div>
    </main>
  );
}
