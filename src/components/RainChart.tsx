interface RainChartProps {
  data: number[];
}

export default function RainChart({ data }: RainChartProps) {
  const maxValue = Math.max(...data);
  const hours = ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'];

  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6">
      <h3 className="text-lg font-semibold mb-4">Chance of Rain</h3>
      <div className="relative h-48 flex items-end justify-between gap-2 px-4">
        {data.map((value, index) => {
          const height = (value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full flex items-end h-32">
                <div
                  className="w-full bg-[var(--color-accent)] rounded-t-md hover:bg-[var(--color-accent-hover)] transition-all cursor-pointer group relative"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold whitespace-nowrap">
                    {value}%
                  </div>
                </div>
              </div>
              {index % 3 === 0 && (
                <span className="text-xs text-[var(--color-text-muted)] mt-2">
                  {hours[Math.floor(index / 3)]}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
