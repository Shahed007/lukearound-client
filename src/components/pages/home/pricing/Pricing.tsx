import React from "react";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Head Hunting",
      description: "For large organizations",
      price: "15%",
      priceDescription: "First Annual Salary",
      features: ["Volume discounts", "6-month replacement guarantee", "Dedicated team", "24/7 support"],
      buttonText: "Book Now",
      featured: false,
    },
    {
      name: "Talent as a service",
      description: "",
      price: "Custom",
      priceDescription: "First Annual Salary",
      features: ["Volume discounts", "6-month replacement guarantee", "Dedicated team", "24/7 support"],
      buttonText: "Book Now",
      featured: true,
    },
    {
      name: "Exclusive Partnership",
      description: "From Start to upt Scale up​ Change to",
      price: "15% Sub £100K / 20% over £100K",
      priceDescription: "Keep First Year Salary",
      features: ["Volume discount", "Consistent Pipelining", "Strategy Updates​", "GMT Support Lead"],
      buttonText: "Book Now",
      featured: false,
    },
  ];

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 10, duration: 0.8 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15, duration: 0.9 } },
  };

  const featuredCardVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9, rotateX: -15 },
    visible: { opacity: 1, y: 0, scale: 1.05, rotateX: 0, transition: { type: "spring" as const, stiffness: 90, damping: 12, duration: 1.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 150, damping: 12, duration: 0.6 } },
  };

  const glowEffect: Variants = {
    hidden: { boxShadow: "0 0 0px rgba(59, 130, 246, 0)" },
    visible: {
      boxShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 25px rgba(59, 130, 246, 0.7)",
        "0 0 15px rgba(59, 130, 246, 0.4)",
        "0 0 8px rgba(59, 130, 246, 0.2)",
      ],
      transition: { duration: 2, times: [0, 0.5, 0.8, 1], repeat: Infinity, repeatDelay: 3 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20" id="pricing">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="text-5xl font-bold text-gray-900 mb-4" variants={titleVariants}>
          Transparent Pricing
        </motion.h2>
        <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your hiring needs. No hidden fees, no surprises.
        </motion.p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`relative rounded-2xl p-8 flex flex-col h-full ${
              plan.featured
                ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white shadow-2xl"
                : "bg-white text-gray-900 shadow-lg border border-gray-200"
            }`}
            variants={plan.featured ? featuredCardVariants : cardVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
          >
            {plan.featured && (
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold"
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 200, damping: 15, delay: 0.5 }}
              >
                MOST POPULAR
              </motion.div>
            )}

            <div className="mb-8">
              <motion.h3 className="text-2xl font-bold" variants={itemVariants}>
                {plan.name}
              </motion.h3>
              <motion.p className={`text-sm ${plan.featured ? "text-gray-300" : "text-gray-600"}`} variants={itemVariants}>
                {plan.description}
              </motion.p>
            </div>

            <motion.div className="mb-8" variants={itemVariants}>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <p className={`text-sm ${plan.featured ? "text-gray-300" : "text-gray-600"}`}>{plan.priceDescription}</p>
            </motion.div>

            <div className="mb-8 space-y-4 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ delay: featureIndex * 0.1 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.featured ? "bg-white/20" : "bg-green-100"}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Check className={`w-4 h-4 ${plan.featured ? "text-white" : "text-green-600"}`} />
                  </motion.div>
                  <span className={`text-sm ${plan.featured ? "text-gray-200" : "text-gray-700"}`}>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className={`w-full py-4 px-6 rounded-lg font-medium transition-colors mt-auto ${
                plan.featured
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
