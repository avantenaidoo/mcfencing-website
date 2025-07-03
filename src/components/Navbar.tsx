// components/Navbar.tsx
import Image from "next/image";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white px-4 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/MCFencingLogo.png"
            alt="MC Fencing Logo"
            width={48}
            height={48}
          />
          <span className="font-bold text-xl">MC Fencing</span>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
