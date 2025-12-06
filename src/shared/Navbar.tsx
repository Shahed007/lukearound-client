"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navItems: { href: string; label: string }[] = [
  { href: "/#what-we-are", label: "About Us" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="linear-background-navbar">
      <div className="custom-container flex items-center justify-between h-24 ">
        <Link href={"/"}>
          <Image height={50} src={logo} alt="Logo" />
        </Link>

        {/* Updated Nav Buttons */}
        <nav className="md:flex hidden px-6 py-4 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              className={`px-6 py-2 rounded-lg border transition duration-200 text-white ${
                pathName === item.href
                  ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700 border-transparent"
                  : "bg-gradient-to-r from-red-400 via-red-500 to-red-600 border-transparent hover:from-red-500 hover:via-red-600 hover:to-red-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="sm:block hidden">
            <Link
              href={"#contact-us"}
              scroll={true}
              className="btn btn-primary"
            >
              Book A Call
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
