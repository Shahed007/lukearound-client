"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navItems: { href: string; label: string }[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="linear-background-navbar">
      <div className="custom-container flex items-center justify-between h-24 ">
        <Link href={"/"}>
          <Image height={50} src={logo} alt="Logo" />
        </Link>
        <nav className="md:block hidden py-[18px] bg-black/0 border border-white shadow rounded-xl   px-[54px]">
          <ul className="inline-flex  gap-2.5 text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={` duration-200 ${
                    pathName === item.href
                      ? "text-primary"
                      : "text-[#050505] hover:text-primary"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <div className="sm:block hidden">
            <Link href={"#"} className="btn btn-primary">
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
