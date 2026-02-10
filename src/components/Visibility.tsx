interface VisibilityProps {
  value: number;
}

export default function Visibility({ value }: VisibilityProps) {
  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Visibility</h3>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-4xl mb-4">👁️</div>
        <div className="text-3xl font-bold mb-2">{value} km</div>
        <p className="text-sm text-[var(--color-text-muted)]">
          {value >= 10 ? 'Excellent' : value >= 5 ? 'Good' : 'Poor'}
        </p>
      </div>
    </div>
  );
}
