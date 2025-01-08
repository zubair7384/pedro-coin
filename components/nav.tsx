"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../public/pedro-logo.png";
import { Menu } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className=" right-0 z-50 flex items-center from-green-500 justify-between p-4 bg-transparent w-4/5 mx-auto pt-8">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="PedroCoin Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white hover:text-white/80 transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="outline"
          className="bg-white  hover:text-[#7F1911] rounded-[100px] border-[#7F1911] text-[#7F1911]"
        >
          WHITE PAPER
        </Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#4A1D1D] border-none">
          <div className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-white/90 mt-4"
            >
              WHITE PAPER
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
