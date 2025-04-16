// components/Navbar.tsx
"use client";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dog Walking", href: "/dogwalking" },
  { label: "Dog Grooming", href: "/dog-grooming" },
  { label: "Events", href: "/events" },
  { label: "Near Me", href: "/near-me" },
  { label: "Food", href: "/food" },
  { label: "Learn", href: "/learn" },
  { label: "Dog Breeds", href: "/dog-breeds" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-6 py-4 shadow-sm">
      {/* Left: Logo */}
      <Link href="/" className="text-orange-600 font-bold text-2xl">
        Marshee
      </Link>

      {/* Middle: Nav Items */}
      <div className="hidden md:flex gap-6 text-lg font-medium">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-orange-600 transition">
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right: Button */}
      <a
        href="#"
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full text-sm font-semibold italic transition"
      >
        Download App
      </a>
    </nav>
  );
}
