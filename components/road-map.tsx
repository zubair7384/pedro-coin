export default function Roadmap() {
  const phases = [
    {
      number: "PHASE 1",
      title: "MEMEVOLUTION BEGINS",
      items: [
        "Launch on Solana.",
        "Build a community through contests and social media.",
      ],
    },
    {
      number: "PHASE 2",
      title: "NFT MAGIC",
      items: [
        "Launch the Pedro NFT Collection.",
        "Introduce NFT marketplace and perks for holders.",
      ],
    },
    {
      number: "PHASE 3",
      title: "FUNCTIONAL GROWTH",
      items: [
        "Launch PedroWallet and PedroSwap.",
        "Partner with influencers and platforms.",
      ],
    },
    {
      number: "PHASE 4",
      title: "GLOBAL EXPANSION",
      items: ["Explore partnerships and gamified NFT ecosystems."],
    },
  ];

  return (
    <div className="flex justify-end min-h-screen bg-[#fafafa]  relative mb-10">
      <div className="w-full">
        {/* Header Text */}
        <h2 className="font-light pt-16 text-[#8B1D1D] max-w-[600px] text-3xl md:text-4xl mx-auto mt-0 my-[6rem]">
          PedroCoin's roadmap is a four-phase journey to create a fun and
          functional ecosystem:
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* Vertical "THE ROAD TO PEDROFICATION" text */}
          <div className="hidden md:block absolute   left-20 bottom-0 height-[100%]">
            <div className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl] text-8xl font-bold tracking-tight bg-gradient-to-b from-[#8B8178] to-[#C1A28B] bg-clip-text text-transparent">
              THE ROAD TO PEDROFICATION
            </div>
          </div>

          {/* Timeline Container */}
          <div className="flex-grow relative">
            {/* Timeline Line */}
            <div className="absolute right-[15.2rem] top-0 bottom-0 w-[2px] bg-[#8B1D1D]" />

            {/* Phases */}
            <div
              className="roadmap-container space-y-24 flex flex-col items-end w-[70%] float-right "
              style={{
                padding: "16rem 15rem 16rem 0px",
              }}
            >
              {phases.map((phase, index) => (
                <div key={index} className="relative w-full text-right ">
                  {/* Timeline Dot */}
                  <div className="absolute right-0 w-3 h-3 rounded-full bg-[#8B1D1D] translate-x-[2px]" />

                  {/* Content */}
                  <div className="pr-24">
                    <div className="text-[#7F1911] font-bold mb-1 md:text-3xl">
                      {phase.number}
                    </div>
                    <div className="text-[#D38A59] text-xl md:text-3xl font-bold mb-3">
                      {phase.title}
                    </div>
                    <div className="space-y-1 text-right">
                      {phase.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-[#440C0A]">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
