import Image from "next/image";

export function WhyPedro() {
  const features = [
    {
      number: "1",
      title: "TRUST",
      description: "Initial LP tokens are burned to prevent rug pulls.",
      bgColor: "bg-[#C68B59]",
      image: null,
    },
    {
      number: "2",
      title: "GROWTH",
      description:
        "Reserved tokens for staking rewards and ecosystem development.",
      image: "/pedro-2.png",
    },
    {
      number: "3",
      title: "FUN",
      description: "Memes, NFTs, and a thriving community.",
      image: "/pedro-3.png",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 container mx-auto bg-[#fff]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A1D1D] mb-6">
          WHY PEDROCOIN?
        </h2>
        <p className="text-lg md:text-xl text-[#4A1D1D]">
          PedroCoin isn't just another pump.shit coin. It's the quirky,
          community-powered token built on Solana to bring memes and utility
          together for the long haul. 🚀🐒
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-[2.5rem] h-[455px] ${
              feature.bgColor || "bg-[#4A1D1D]"
            }`}
          >
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={400}
                className="w-full h-auto object-cover absolute inset-0"
              />
            )}
            <div className="relative p-8 h-full min-h-[320px] flex flex-col">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
                <span className="text-[#4A1D1D] font-bold text-xl">
                  {feature.number}
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
