import { CityWeather } from '@/types/weather';

interface CitySidebarProps {
  cities: CityWeather[];
}

export default function CitySidebar({ cities }: CitySidebarProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6">
      <h3 className="text-lg font-semibold mb-4">Other Cities</h3>
      <div className="space-y-3">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-[var(--radius-md)] bg-[var(--color-surface-hover)] hover:bg-[var(--color-border)] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{city.icon}</div>
              <div>
                <p className="font-medium text-sm">{city.city}</p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {city.condition}
                </p>
              </div>
            </div>
            <div className="text-lg font-semibold">{city.temperature}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
