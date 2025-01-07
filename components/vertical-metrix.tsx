interface VerticalMetricsProps {
  percentage: number;
  children: React.ReactNode;
}

export function VerticalMetrics({
  percentage,
  children,
}: VerticalMetricsProps) {
  // Calculate height based on percentage (50% = 800px)
  const height = Math.round((percentage / 50) * 800);

  return (
    <div
      className="relative w-64 rounded-lg overflow-hidden"
      style={{
        height,
        background:
          "linear-gradient(180deg, rgb(167, 230, 192) 0%, rgb(109, 203, 149) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full p-6 text-white">
        <div className="text-6xl font-bold mb-4">{percentage}%</div>
        {children}
      </div>
    </div>
  );
}
