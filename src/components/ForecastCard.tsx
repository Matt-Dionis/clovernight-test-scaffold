import { DayForecast } from '@/types/weather';

interface ForecastCardProps {
  forecast: DayForecast[];
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6">
      <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 bg-[var(--color-surface-hover)] rounded-[var(--radius-md)] hover:bg-[var(--color-border)] transition-colors"
          >
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              {day.day}
            </p>
            <div className="text-3xl mb-2">{day.icon}</div>
            <div className="text-sm">
              <span className="font-semibold">{day.high}°</span>
              <span className="text-[var(--color-text-muted)] ml-1">
                {day.low}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
