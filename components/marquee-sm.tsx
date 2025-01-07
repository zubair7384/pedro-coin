export default function MarqueeSm() {
  const text = "PEDROCOIN × AWKWARDLY EPIC × ";

  return (
    <div className="bg-[#8B1D1D] overflow-hidden whitespace-nowrap h-[64px] flex items-center">
      <div className="animate-marquee inline-block">
        <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-2">
          {text}
        </span>
        <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-2">
          {text}
        </span>
        <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-2">
          {text}
        </span>
        <span className="inline-flex items-center text-[#C1A28B] text-xl font-medium px-2">
          {text}
        </span>
      </div>
    </div>
  );
}
