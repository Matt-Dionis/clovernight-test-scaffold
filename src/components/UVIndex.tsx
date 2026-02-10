interface UVIndexProps {
  value: number;
}

export default function UVIndex({ value }: UVIndexProps) {
  const getUVLevel = (uv: number) => {
    if (uv <= 2) return { level: 'Low', color: '#10b981' };
    if (uv <= 5) return { level: 'Moderate', color: '#f59e0b' };
    if (uv <= 7) return { level: 'High', color: '#f97316' };
    if (uv <= 10) return { level: 'Very High', color: '#ef4444' };
    return { level: 'Extreme', color: '#991b1b' };
  };

  const uvInfo = getUVLevel(value);
  const percentage = (value / 11) * 100;

  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">UV Index</h3>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="var(--color-border)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke={uvInfo.color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-xs text-[var(--color-text-muted)]">of 11</div>
            </div>
          </div>
        </div>
        <div
          className="px-4 py-1 rounded-full text-sm font-medium"
          style={{ backgroundColor: uvInfo.color + '20', color: uvInfo.color }}
        >
          {uvInfo.level}
        </div>
      </div>
    </div>
  );
}
