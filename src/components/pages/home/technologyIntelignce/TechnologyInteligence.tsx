"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import LinkedIn from "@/assets/technology-logo/LinkedInLogo.png";
import jungle from "@/assets/technology-logo/jungleLogo.png";
import chatGPT from "@/assets/technology-logo/ChatGPTLogo.png";
import vqnnq from "@/assets/technology-logo/VONQLogo.png";
import lusha from "@/assets/technology-logo/LushaLogo.png";
import cnava from "@/assets/technology-logo/CanvaLogo.png";
import linkedInRecru from "@/assets/technology-logo/LinkedInRecruiterLogo.png";
import clay from "@/assets/technology-logo/ClayLogo.png";
import cord from "@/assets/technology-logo/CordLogo.png";
import dripify from "@/assets/technology-logo/DripifyLogo.png";
import teamtailor from "@/assets/technology-logo/TeamtailorLogo.png";
import testGorilla from "@/assets/technology-logo/TestGorillaLogo.png";
import Link from "next/link";

export default function TechnologyIntelligence() {
  const services = [
    "Talent & Competitor market insights – live salary trends, location hotspots, role demand",
    "Strategic hiring plans – built around your business goals and funding stage",
    "Outbound - Passive candidate pipeline system",
    "Inbound - Social & Ad campaigns to create attention to your opportunities",
    "DE&I data – to shape inclusive hiring and reporting with intention",
  ];

  const companyLogos = [
    { name: "LinkedIn", logo: LinkedIn },
    { name: "Welcome to the Jungle", logo: jungle },
    { name: "ChatGPT", logo: chatGPT },
    { name: "Vonq", logo: vqnnq },
    { name: "LinkedIn Recruiter", logo: linkedInRecru },
    { name: "Canva", logo: cnava },
    { name: "Hive", logo: cord },
    { name: "Clay", logo: clay },
    { name: "Dripify", logo: dripify },
    { name: "Teamtailor", logo: teamtailor },
    { name: "TestGorilla", logo: testGorilla },
    { name: "Lusha", logo: lusha },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const serviceItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 px-6 mb-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background elements */}
      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-10"
          animate={{ scale: [1, 1.5, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10"
          animate={{ scale: [1, 1.5, 1], x: [0, -30, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-500 rounded-full opacity-10"
          animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div className="space-y-10" variants={containerVariants}>
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                variants={titleVariants}
              >
                Technology & Intelligence
              </motion.h1>
              <motion.p
                className="text-xl text-slate-300"
                variants={titleVariants}
              >
                Real-time insights. Smarter hiring decisions.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-200 text-slate-900 p-8 rounded-2xl shadow-2xl border border-gray-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.h2
                className="text-2xl font-semibold mb-8 text-slate-800"
                variants={serviceItemVariants}
              >
                What we provide:
              </motion.h2>
              <ul className="space-y-5">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    variants={serviceItemVariants}
                  >
                    <motion.div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <span className="text-base leading-relaxed font-medium">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <Link href={"#contact-us"} scroll={true}>
              <motion.button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Call
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={containerVariants}
          >
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center h-24 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-300/50"
                variants={logoVariants}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={60}
                  className="object-contain max-h-12"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
