"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Search, Users, CheckCircle, Target } from "lucide-react";

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
            lasting impact.&quot;​
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cards Grid - Updated to 4 columns */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Deep Discovery Card */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-6 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          <div className="mb-4">
            <motion.div
              className="w-16 h-16 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Search className="w-8 h-8 text-blue-600" />
            </motion.div>
          </div>
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 text-center"
            variants={titleVariants}
          >
            Deep Discovery
          </motion.h3>
          <motion.p
            className="text-gray-600 text-center mb-4 leading-relaxed text-sm"
            variants={listItemVariants}
          >
            Deep dive into company culture, role requirements, and candidate aspirations
          </motion.p>
          <motion.ul className="space-y-2" variants={containerVariants}>
            {[
              "Culture & role scan",
              "Success markers set",
              "Skills gap map",
              "Market insights"
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-sm"
                variants={listItemVariants}
                whileHover={{ x: 3 }}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Smart Sourcing Card */}
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-cyan-500 rounded-full opacity-10"></div>
          <div className="mb-4">
            <motion.div
              className="w-16 h-16 mx-auto mb-3 bg-slate-700 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Users className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>
          <motion.h3
            className="text-xl font-bold mb-3 text-center"
            variants={titleVariants}
          >
            Smart Sourcing
          </motion.h3>
          <motion.p
            className="text-slate-300 text-center mb-4 leading-relaxed text-sm"
            variants={listItemVariants}
          >
            Leverage our extensive network and advanced tools to identify top candidates
          </motion.p>
          <motion.ul className="space-y-2" variants={containerVariants}>
            {[
              "Insider networks",
              "AI shortcuts", 
              "Passive outreach",
              "Inclusive pipelines"
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-sm"
                variants={listItemVariants}
                whileHover={{ x: 3 }}
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-slate-200">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Precise Placement Card */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-6 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <div className="mb-4">
            <motion.div
              className="w-16 h-16 mx-auto mb-3 bg-purple-50 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </motion.div>
          </div>
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 text-center"
            variants={titleVariants}
          >
            Precise Placement
          </motion.h3>
          <motion.p
            className="text-gray-600 text-center mb-4 leading-relaxed text-sm"
            variants={listItemVariants}
          >
            Rigorous screening process followed by seamless onboarding support
          </motion.p>
          <motion.ul className="space-y-2" variants={containerVariants}>
            {[
              "Tailored interviews",
              "Skills testing",
              "References checked", 
              "Offer support"
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-sm"
                variants={listItemVariants}
                whileHover={{ x: 3 }}
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Lasting Impact Card - New 4th card with blue background */}
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
          <div className="mb-4">
            <motion.div
              className="w-16 h-16 mx-auto mb-3 bg-white/80 rounded-full flex items-center justify-center"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Target className="w-8 h-8 text-emerald-600" />
            </motion.div>
          </div>
          <motion.h3
            className="text-xl font-bold text-slate-300 mb-3 text-center"
            variants={titleVariants}
          >
            Lasting Impact
          </motion.h3>
          <motion.p
            className="text-slate-300 text-center mb-4 leading-relaxed text-sm"
            variants={listItemVariants}
          >
            Ongoing support ensures long-term success and satisfaction for all parties
          </motion.p>
          <motion.ul className="space-y-2" variants={containerVariants}>
            {[
              "Regular check-ins",
              "Feedback loops",
              "Culture fit",
              "Talent advisory"
            ].map((text, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-sm"
                variants={listItemVariants}
                whileHover={{ x: 3 }}
              >
                <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-slate-300">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}