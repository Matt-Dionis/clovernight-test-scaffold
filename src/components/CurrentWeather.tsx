import { WeatherData } from '@/types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 md:p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">{data.temperature}°</h2>
          <p className="text-[var(--color-text-secondary)] text-lg mb-1">
            {data.city}, {data.country}
          </p>
          <p className="text-[var(--color-text-muted)] text-sm">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        <div className="text-6xl">⛅</div>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
        <div>
          <span className="text-[var(--color-text-muted)]">Feels like: </span>
          <span>{data.feelsLike}°</span>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)]">H: </span>
          <span>{data.high}°</span>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)]">L: </span>
          <span>{data.low}°</span>
        </div>
      </div>
    </div>
  );
}
