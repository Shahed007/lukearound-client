import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left side - Logo and company info */}
          <div className="flex-1 max-w-md mt-6">
            <div className="flex items-center gap-2 mb-6">
              <Link href={"/"}>
                <Image height={60} src={logo} alt="Logo" />
              </Link>
            </div>

            <div className=" text-[#7B7B7B] leading-relaxed">
              <p className="mb-2">
                Trading Division of Trivium Partners LTD​
              </p>
              <p className="text-justify">
                Company Registration Number 16564926
              </p>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex-1 max-w-md">
            <nav className="space-y-4">
              <p
                
                className="block text-[#115A90] font-semibold text-md hover:text-blue-700 transition-colors"
              >
                BOOK A QUICK CALL
              </p>
              <a
                href="#"
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              <Link
                href="#"
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                Talent Partners
              </Link>
              <Link
                href={"#contact-us"} scroll={true}
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                Book a call
              </Link>
              <a
                href="#"
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                Request for free trail
              </a>
              <a
                href="#"
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-[#7B7B7B] text-md hover:text-gray-900 transition-colors"
              >
                About us
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="mt-6 p-4 border-t border-gray-200">
        <p className="text-center text-lg text-gray-600">
          © Copyright 2025, All Rights Reserved by Trivium Partners LTD
        </p>
      </div>
    </footer>
  );
}
