import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center mb-8 max-w-5xl px-4">
      <div className="flex items-center space-x-4">
        <Image src="/images/MCFencingLogo.png" alt="MC Fencing Logo" width={48} height={48} />
        <span className="font-bold text-xl text-white">MC Fencing</span>
      </div>
      <ul className="flex space-x-6 text-lg text-white">
        <li>
          <a href="#home" className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}