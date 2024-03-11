"use client";

import NavLinks from "./ui/nav-links";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-16 backdrop-blur-xl">
      <div className="w-full h-full flex items-center justify-between px-5">
        <section>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Cniper Studio Logo"
              width={120}
              height={120}
            />
          </Link>
        </section>
          <NavLinks />
          <div className="-mr-2 flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          aria-controls="mobile menu"
          aria-expanded="false"
          className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FaX className="block h-6 w-6" />
          ) : (
            <FaBars className="block h-6 w-6" />
          )}
        </button>
      </div>
      </div>
      <div
        className={
          isOpen
            ? "left-0 top-0 w-full h-screen relative transition-transform ease-in-out duration-500 flex flex-col items-center justify-start z-[50] opacity-45 backdrop-blur-sm"
            : "hidden"
        }
      >
        <ul className="flex flex-col justify-center items-center mt-20">
          <li className="text-2xl text-slate-700 mb-4">
            <Link href="/">Home</Link>
          </li>
          <li className="text-2xl text-slate-700 mb-4">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="text-2xl text-slate-700 mb-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
