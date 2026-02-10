interface WindStatusProps {
  speed: number;
  direction: string;
}

export default function WindStatus({ speed, direction }: WindStatusProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Wind Status</h3>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-4xl mb-4">💨</div>
        <div className="text-3xl font-bold mb-2">{speed} km/h</div>
        <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface-hover)]">
            <span className="text-sm">↑</span>
          </div>
          <span>{direction}</span>
        </div>
      </div>
    </div>
  );
}
