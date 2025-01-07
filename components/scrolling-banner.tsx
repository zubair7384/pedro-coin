export function ScrollingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#8B4513] transform -rotate-6 scale-110">
      <div className="animate-scroll whitespace-nowrap py-2">
        <span className="inline-block mx-4">PEDROCOIN</span>
        <span className="inline-block mx-4">×</span>
        <span className="inline-block mx-4">AWKWARDLY EPIC</span>
        <span className="inline-block mx-4">×</span>
        <span className="inline-block mx-4">PEDROCOIN</span>
        <span className="inline-block mx-4">×</span>
        <span className="inline-block mx-4">AWKWARDLY EPIC</span>
        <span className="inline-block mx-4">×</span>
      </div>
    </div>
  );
}
