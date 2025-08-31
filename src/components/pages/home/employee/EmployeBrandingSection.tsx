import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import image from "@/assets/Rectangle 21.png";

export default function EmployerBrandingSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween" as const, ease: "easeOut" as const, duration: 0.9, delay: 0.1 },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween" as const, ease: "easeOut" as const, duration: 0.9, delay: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15, duration: 0.7 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div className="relative" variants={imageVariants}>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt="Professional woman holding coffee cup"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="space-y-6" variants={contentVariants}>
          <motion.h2 className="text-4xl font-bold text-gray-900 leading-tight" variants={itemVariants}>
            Employer Branding
          </motion.h2>

          <motion.p className="text-gray-600 text-lg leading-relaxed" variants={itemVariants}>
            We don&apos;t just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early
            stage companies achieve hiring success in a sustainable way...
            <span className="text-blue-600 cursor-pointer hover:underline">Read More</span>
          </motion.p>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900">What we provide:</h3>

            <div className="space-y-3">
              {[ "Proof, answers, and urgency that turn consideration into a \"yes.\"", "Assets that sell your workplace to potential hires.", "Internal marketing that turns candidates into applicants." ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="pt-4" variants={itemVariants} transition={{ delay: 0.5 }}>
            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
            >
              Book A Call
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
