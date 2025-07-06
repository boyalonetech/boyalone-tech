import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-[28px] font-bold text-[#008CFF]">
            BOY ALONE TECH
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#008CFF] text-sm">
            Home
          </Link>
          <Link href="#skills" className="hover:text-[#008CFF] text-sm">
            Skill
          </Link>
          <Link href="#projects" className="hover:text-[#008CFF] text-sm">
            Projects
          </Link>
          <Link href="#services" className="hover:text-[#008CFF] text-sm">
            Services
          </Link>
          <Link href="#about" className="hover:text-[#008CFF] text-sm">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
