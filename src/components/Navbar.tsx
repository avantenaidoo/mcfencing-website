import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/images/MCFencingLogo.png" alt="MC Fencing Logo" width={48} height={48} />
          <span className="font-bold text-xl">MC Fencing</span>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}