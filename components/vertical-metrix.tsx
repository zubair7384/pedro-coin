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
      className="metrix-container relative w-64 overflow-hidden"
      style={{
        height,
      }}
    >
      <div className="absolute top-0 left-0 w-full p-6 text-[#41CE84] md:hidden">
        <div className="text-6xl font-bold mb-4 text-[#41CE84]">
          {percentage}%
        </div>
        {children}
      </div>
    </div>
  );
}
