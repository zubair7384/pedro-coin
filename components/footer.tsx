import { Twitter, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/pedro-logo.png";
import solana from "../public/solana.png";
import Marquee from "react-fast-marquee";
import useIsMobile from "@/hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <footer className=" relative bg-[#440C0A] overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Join the Pedro Party
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Connect with meme lovers and crypto enthusiasts across the globe and
            be part of the awkward revolution
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="#"
              className="bg-white p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Send className="w-6 h-6 text-[#8B1D1D]" />
            </Link>
            <Link
              href="#"
              className="bg-white p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Twitter className="w-6 h-6 text-[#8B1D1D]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="footer-marquee-text inset-0 overflow-hidden pointer-events-none mb-20">
        <div className="footer-marquee-text-inner bottom-32 w-full text-[14vw] leading-none font-bold whitespace-nowrap">
          <Marquee gradient={false} speed={30} direction="right">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span key={index} className="text-[#C1A28B] opacity-90 px-4">
                  ere humor mee
                </span>
              ))}
          </Marquee>
          <Marquee gradient={false} speed={30}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span key={index} className="text-[#41CE84] opacity-90 px-4">
                  on on the Sola
                </span>
              ))}
          </Marquee>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[80%] mx-auto">
        <div className="container mx-auto px-4 py-6 pb-0">
          <div className="border-b border-white/12 border-[#ffffff97] flex flex-col md:flex-row items-center justify-between gap-4 py-8">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Pedro Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Copyright */}
          <div
            className="copy-right-text flex justify-center text-[#fff] text-white/60 text-md p-12 text-center"
            style={
              {
                padding: !isMobile && "1rem 0",
              } as any
            }
          >
            © 2025 PedroCoin. Powered by Solana
            {isMobile && (
              <Image
                className="solana-img mx-2"
                width={20}
                height={15}
                src={solana}
                alt="solana"
              />
            )}
            | Meme responsibly. This is not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
