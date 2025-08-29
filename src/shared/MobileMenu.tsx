import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navItems: { href: string; label: string }[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact Us" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  return (
    <div className="md:hidden block">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-3xl"
      >
        <IoIosMenu />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`z-40 duration-300 bg-zinc-200/40 fixed h-screen w-full left-0 top-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed z-50 h-screen bg-white border-r border-gray-300 shadow top-0 left-0 w-[230px]
            duration-300 ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl text-background"
        >
          <IoMdClose />
        </button>
        <ul className="pt-20 pl-5 flex flex-col gap-2 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => setOpen(false)}
                className={`transition-colors duration-200 ${
                  pathName === item.href ? "text-primary" : "hover:text-primary"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="sm:hidden flex">
            <Link
              onClick={() => setOpen(false)}
              className="btn btn-primary text-base "
              href={"#"}
            >
              Book A Call
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
