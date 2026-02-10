interface HumidityProps {
  value: number;
}

export default function Humidity({ value }: HumidityProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Humidity</h3>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-4xl mb-4">💧</div>
        <div className="text-3xl font-bold mb-2">{value}%</div>
        <div className="w-full max-w-[200px] h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] rounded-full transition-all"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
