import MarqueeSm from "@/components/marquee-sm";
import { Nav } from "@/components/nav";
import Pedromics from "@/components/pedromics";
import Roadmap from "@/components/road-map";
import TotalSupply from "@/components/total-supply";
// import { ScrollingBanner } from "@/components/scrolling-banner";
import { Button } from "@/components/ui/button";
import { VerticalMetrics } from "@/components/vertical-metrix";
import { WhyPedro } from "@/components/why-pedro";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  const pedro_gif =
    "https://s3-alpha-sig.figma.com/img/3d71/7fce/044af6f03699e7c1706cc397adf184e7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkR-zfPVu~8U2r1Sr9qWFR2L-Azf7auTvkoCOJkFbDsaC7M3wNx1sQHviW0~OcXzVjWLiCd76GYOvR1EF~UbpIRuIwD~EcxYxP71lI39m~kylWBcVlK15jkZDGLeE~gv4n5638YORlnADvgTp2-lk43Dsg8PjaL7aa4tKwNYgfNMvt8rQVn8xBu0cVrtFRUT2llMx~XJXTTmxgIWBQzqQcQUAmxQ1y6xf6DZGZn44sEpAm5JXjjBdaiHByqXtylDJvuP0tlbH8g2D3~iaBgcS736ef9wRJJd-15WngiuxHX6nkjZkjHf5-IVc3P9CsVj9RfbqywJFDoNtnMwlOOAUA__";
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-500 to-green-100">
      <Nav />

      <div className=" mx-auto pt-24">
        <div className="text-center max-w-4xl mx-auto mt-20 mb-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building the Future of Memes & Tokens with the Awkward Look
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Where humor and innovation unite on the Solana blockchain—join the
            community-driven revolution blending internet culture with
            cutting-edge crypto utility.
          </p>
          <Button className="bg-[#4A1D1D] text-white hover:bg-[#3A1515] px-8 py-6 text-lg">
            JOIN THE COMMUNITY
          </Button>
        </div>

        <div className="relative bg-[#fff] ">
          {/* <ScrollingBanner /> */}

          <div className="mt-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#4A1D1D] mb-6">
                THE TALE OF PEDRO WHERE MEMES MEET BLOCKCHAIN
              </h2>
              <p className="text-[#4A1D1D] text-lg">
                PedroCoin isn't just another cryptocurrency—it's a movement!
                Built on the Solana blockchain, PedroCoin merges the universal
                language of memes with groundbreaking blockchain technology. Our
                mission is to make crypto accessible, fun, and impactful for
                everyone, from seasoned investors to meme lovers.
              </p>
            </div>
            <div className="relative w-[fit-content]">
              <Image
                src={pedro_gif}
                alt="Pedro Meme"
                width={500}
                height={500}
                className="rounded-full  w-[500px] h-[500px]"
              />
            </div>
          </div>
        </div>
        <WhyPedro />
        <Pedromics />
        <div className="relative matrics-container flex items-end gap-[1rem] bg-[#41CE84]">
          <div className="absolute right-0 top-10">
            <TotalSupply />
          </div>
          <VerticalMetrics percentage={50}>
            <div>
              <div className="text-xl font-medium mb-2">Liquidity Pool</div>
              <div className="text-2xl font-semibold mb-2">
                550,000,000 coins
              </div>
              <div className="text-sm opacity-90">
                Locked liquidity ensures market stability
              </div>
            </div>
          </VerticalMetrics>
          <VerticalMetrics percentage={25}>
            <div>
              <div className="text-xl font-medium mb-2">Liquidity Pool</div>
              <div className="text-2xl font-semibold mb-2">
                550,000,000 coins
              </div>
              <div className="text-sm opacity-90">
                Locked liquidity ensures market stability
              </div>
            </div>
          </VerticalMetrics>
          <VerticalMetrics percentage={15}>
            <div>
              <div className="text-xl font-medium mb-2">Liquidity Pool</div>
              <div className="text-2xl font-semibold mb-2">
                550,000,000 coins
              </div>
              <div className="text-sm opacity-90">
                Locked liquidity ensures market stability
              </div>
            </div>
          </VerticalMetrics>
          <VerticalMetrics percentage={5}>
            <div>
              <div className="text-xl font-medium mb-2">Liquidity Pool</div>
              <div className="text-2xl font-semibold mb-2">
                550,000,000 coins
              </div>
              <div className="text-sm opacity-90">
                Locked liquidity ensures market stability
              </div>
            </div>
          </VerticalMetrics>
        </div>
        <Roadmap />
        <MarqueeSm />
        <Footer />
      </div>
    </main>
  );
}
