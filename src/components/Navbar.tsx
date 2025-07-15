"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/MCFencingLogo.png"
            alt="MC Fencing Logo"
            width={48}
            height={48}
            style={{ height: "auto" }}
          />
          <span className="font-bold text-xl">MC Fencing</span>
        </div>

        <button
          className="md:hidden"
          style={{ color: "var(--foreground)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          className={`flex-col md:flex-row md:flex space-x-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0 md:max-h-full"
          } md:max-h-full`}
          style={{ backgroundColor: isOpen ? "var(--background)" : "transparent" }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ color: "var(--foreground)" }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}