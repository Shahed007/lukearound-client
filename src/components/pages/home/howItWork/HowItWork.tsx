import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ico1 from "@/assets/ico/Group.png";
import ico2 from "@/assets/ico/Group 2.png";
import ico3 from "@/assets/ico/Group 3.png";

export default function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.9,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
        duration: 1,
      },
    },
  };

  const listItemVariants: Variants = {
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

  const glowEffect: Variants = {
    hidden: { boxShadow: "0 0 0px rgba(59, 130, 246, 0)" },
    visible: {
      boxShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 20px rgba(59, 130, 246, 0.6)",
        "0 0 10px rgba(59, 130, 246, 0.3)",
        "0 0 5px rgba(59, 130, 246, 0.1)",
      ],
      transition: {
        duration: 1.5,
        times: [0, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-6 mb-3">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-6"
          variants={titleVariants}
        >
          How We Work​
        </motion.h2>
        <motion.div variants={titleVariants}>
          <motion.p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Our inside-edge process delivers faster hires, stronger fits, and
            lasting impact.”​
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Discovery & Analysis Card */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-8 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <div className="mb-6">
            <motion.div
              className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={ico1}
                alt="Discovery & Analysis Icon"
                className="w-10 h-10"
              />
            </motion.div>
          </div>
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 text-center"
            variants={titleVariants}
          >
            Discovery & Analysis
          </motion.h3>
          <motion.p
            className="text-gray-600 text-center mb-6 leading-relaxed text-lg"
            variants={listItemVariants}
          >
            Deep dive into company culture, role requirements, and candidate
            aspirations
          </motion.p>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {[
              "Comprehensive needs assessment",
              "Cultural fit evaluation",
              "Skills gap analysis",
              "Market research",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Talent Sourcing Card */}
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-cyan-500 rounded-full opacity-10"></div>
          <div className="mb-6">
            <motion.div
              className="w-20 h-20 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={ico2}
                alt="Talent Sourcing Icon"
                className="w-10 h-10"
              />
            </motion.div>
          </div>
          <motion.h3
            className="text-2xl font-bold mb-4 text-center"
            variants={titleVariants}
          >
            Talent Sourcing
          </motion.h3>
          <motion.p
            className="text-slate-300 text-center mb-6 leading-relaxed text-lg"
            variants={listItemVariants}
          >
            Leverage our extensive network and advanced tools to identify top
            candidates
          </motion.p>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {[
              "Global talent network access",
              "AI-powered candidate matching",
              "Passive candidate engagement",
              "Diversity-focused sourcing",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-200">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Vetting & Placement Card */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-8 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <div className="mb-6">
            <motion.div
              className="w-20 h-20 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={ico3}
                alt="Vetting & Placement Icon"
                className="w-10 h-10"
              />
            </motion.div>
          </div>
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 text-center"
            variants={titleVariants}
          >
            Vetting & Placement
          </motion.h3>
          <motion.p
            className="text-gray-600 text-center mb-6 leading-relaxed text-lg"
            variants={listItemVariants}
          >
            Rigorous screening process followed by seamless onboarding support
          </motion.p>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {[
              "Multi-stage interviews",
              "Technical assessments",
              "Reference verification",
              "Onboarding assistance",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
