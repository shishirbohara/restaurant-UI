"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLinks } from "@/utils/navLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-10 transition-all duration-300
        ${isScrolled
          ? "bg-black/50 backdrop-blur-md md:py-7 py-5 shadow-lg"
          : "bg-transparent py-7"
        }
      `}
    >
      <div className="flex justify-between items-center xl:px-32 px-5 xl:pr-5 text-white">
        <Link href="/reservation">
          <h1 className="hidden md:block border-y border-[#A79601] cursor-pointer py-1 hover:text-[#BCAF87] transition-span">
            Reservation
          </h1>
        </Link>
        <Link href="/">
          <p className="text-lg md:text-3xl">Willow & Thyme Restaurant</p>
        </Link>
        <div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="cursor-pointer z-30 relative"
          >
            {isMenuOpen ? (
              <RxCross1 size={40} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-[#BCAF87] text-white z-20
          transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col justify-center items-end h-full md:space-y-5 space-y-2 md:text-3xl text-lg xl:px-32 px-12">
          <h1 className="hidden xl:block text-5xl mb-28 -mt-28 mr-[330px] font-serif">Willow & Thyme Restaurant</h1>
          {
            NavLinks.map((nav, i) => (
              <Link key={i} href={nav.href} onClick={closeMenu}>
                <li className="hover:opacity-70 cursor-pointer font-medium">{nav.label}</li>
              </Link>
            ))
          }
          <p className="text-sm md:text-base text-end">Ekantakuna - Lalitpur, Nepal <br />
            Closed on Saturday and Sunday <br />
            Open Monday to Friday: 10:00 to 14:30 and 19:00 to 22h:30</p>
        </ul>
      </div>
    </div>
  );
}
