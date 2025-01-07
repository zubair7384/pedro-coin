import { Twitter, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/pedro-logo.png";

export default function Footer() {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Tokenomics", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <footer className="relative bg-[#440C0A] overflow-hidden">
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
      <div className=" inset-0 overflow-hidden pointer-events-none mb-20">
        <div className=" bottom-32 w-full text-[14vw] leading-none font-bold whitespace-nowrap">
          <div className="text-[#C1A28B] opacity-90">ere humor mee</div>
          <div className="text-[#4CAF50] opacity-90">on on the Sola</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Pedro Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2025 PedroCoin. Powered by Solana ⚡ | Meme responsibly. This is
              not financial advice.
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
        </div>
      </div>
    </footer>
  );
}
