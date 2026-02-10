import CurrentWeather from '@/components/CurrentWeather';
import ForecastCard from '@/components/ForecastCard';
import WindStatus from '@/components/WindStatus';
import UVIndex from '@/components/UVIndex';
import Humidity from '@/components/Humidity';
import Visibility from '@/components/Visibility';
import RainChart from '@/components/RainChart';
import CitySidebar from '@/components/CitySidebar';
import { currentWeather, otherCities } from '@/data/weatherData';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Weather Dashboard</h1>
          <p className="text-[var(--color-text-secondary)]">
            Real-time weather information and forecasts
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Current Weather */}
            <CurrentWeather data={currentWeather} />

            {/* 7-Day Forecast */}
            <ForecastCard forecast={currentWeather.forecast} />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WindStatus
                speed={currentWeather.wind.speed}
                direction={currentWeather.wind.direction}
              />
              <UVIndex value={currentWeather.uvIndex} />
              <Humidity value={currentWeather.humidity} />
            </div>

            {/* Second Row Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Visibility value={currentWeather.visibility} />
              <RainChart data={currentWeather.chanceOfRain} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <CitySidebar cities={otherCities} />
          </aside>
        </div>
      </div>
    </main>
  );
}
