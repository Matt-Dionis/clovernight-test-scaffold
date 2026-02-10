import { DashboardHeader } from "@/components/dashboard-header";
import { CurrentWeather } from "@/components/current-weather";
import { ForecastCard } from "@/components/forecast-card";
import { RainChart } from "@/components/rain-chart";
import { MetricsCards } from "@/components/metrics-cards";
import { CitiesSidebar } from "@/components/cities-sidebar";
import { weatherData, otherCities } from "@/lib/weather-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111015] p-4 lg:p-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <DashboardHeader location={weatherData.location} />

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <button className="text-[#818085] text-xl hover:text-white transition-colors">
              Today
            </button>
            <button className="text-[#818085] text-xl hover:text-white transition-colors">
              Tomorrow
            </button>
            <button className="text-white text-xl font-medium">
              Next 7days
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#1e1e1e] rounded-[15px] h-[30px]">
              <button className="px-4 py-1 text-[#818085] text-[11px] font-medium hover:text-white transition-colors">
                Air Quality
              </button>
              <button className="px-4 py-1 bg-[#bbd7ec] rounded-[15px] text-[#1e1e1e] text-[11px] font-medium">
                Forecast
              </button>
            </div>
            <h2 className="text-white text-xl font-medium hidden lg:block">
              Chance Of Rain
            </h2>
          </div>
        </div>

        {/* Section Headers */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-medium">Today's Overview</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 7-Day Forecast */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {/* Current Day - Featured */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                <CurrentWeather data={weatherData} />
              </div>

              {/* Forecast Cards */}
              {weatherData.forecast.map((day, index) => (
                <ForecastCard key={index} forecast={day} />
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricsCards
                wind={weatherData.current.wind}
                humidity={weatherData.current.humidity}
                visibility={weatherData.current.visibility}
                uvIndex={weatherData.current.uvIndex}
              />
            </div>

            {/* Rain Chart */}
            <RainChart hourly={weatherData.hourly} />
          </div>

          {/* Cities Sidebar */}
          <div className="lg:col-span-1">
            <CitiesSidebar cities={otherCities} />
          </div>
        </div>
      </div>
    </main>
  );
}
