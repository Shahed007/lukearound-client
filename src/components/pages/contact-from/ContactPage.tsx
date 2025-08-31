"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";
import Image from "next/image";
import image from "@/assets/contact-image.png";
import { motion, useAnimation, AnimatePresence, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    yourAge: "",
    growthForecast: "",
    projectTimeline: "",
    needs: [] as string[],
    message: "",
  });

  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleNeedsChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      needs: checked
        ? [...prev.needs, need]
        : prev.needs.filter((n) => n !== need),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const formVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      color: "#082B47",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const contactItemVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    hover: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const CustomSelect = ({
    value,
    onChange,
    placeholder,
    options,
    name,
  }: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: { value: string; label: string }[];
    name: string;
  }) => {
    const isOpen = openSelect === name;

    return (
      <motion.div className="relative" variants={itemVariants}>
        <motion.button
          type="button"
          onClick={() => setOpenSelect(isOpen ? null : name)}
          className="w-full mt-1 px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1] flex items-center justify-between"
          whileHover={{
            scale: 1.02,
            borderColor: "#ffffff",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={value ? "text-[#D2D1D1]" : "text-[#D2D1D1]"}>
            {value
              ? options.find((opt) => opt.value === value)?.label
              : placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 w-full mt-1 bg-[#082B47] text-[#D2D1D1] border border-gray-300 rounded-md shadow-lg"
            >
              {options.map((option) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpenSelect(null);
                  }}
                  className="w-full px-3 py-2 text-left bg-[#082B47] border-[#D2D1D1] text-[#D2D1D1] hover:bg-blue-950 first:rounded-t-md last:rounded-b-md cursor-pointer"
                  whileHover={{ backgroundColor: "#0A3A5C" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      id="contact-us"
      className="max-w-7xl mx-auto w-full rounded-2xl overflow-hidden space-y-5 mb-20 py-5 mt-20"
    >
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left Side - Contact Info */}
        <motion.div
          variants={imageVariants}
          className="p-8 lg:p-12 flex flex-col justify-center"
        >
          <div className="max-w-md">
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={image}
                alt="Contact illustration"
                width={1000}
                height={1000}
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-4 text-balance"
            >
              Ready to Transform Your Hiring?
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Get in touch with our team to discuss your talent needs or explore
              career opportunities.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Business District, San Francisco, CA 94105",
                },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@talentforge.com" },
                { icon: Clock, text: "Mon-Fri: 9AM-6PM PST" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={contactItemVariants}
                  whileHover="hover"
                  className="flex items-start gap-3"
                >
                  <item.icon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          variants={formVariants}
          className="bg-[#082B47] p-4 lg:p-6 rounded-2xl shadow-md"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-full mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-2"
            >
              Send us a message
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white mb-8">
              We&#39;ll get back to you within 24 hours
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-white text-md font-bold mb-1"
                  >
                    First name
                  </label>
                  <motion.input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                    placeholder="John"
                    whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-white text-md font-bold mb-1"
                  >
                    Last name
                  </label>
                  <motion.input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                    placeholder="Doe"
                    whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label
                    htmlFor="email"
                    className="block text-white text-md font-bold mb-1"
                  >
                    Email
                  </label>
                  <motion.input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                  />
              </motion.div>

              {/* Industry */}
              <motion.div variants={itemVariants}>
                <label className="block text-white text-md font-bold mb-3">
                  Industry
                </label>
                <CustomSelect
                  name="industry"
                  value={formData.industry}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, industry: value }))
                  }
                  placeholder="Your Industry name"
                  options={[
                    { value: "technology", label: "Technology" },
                    { value: "healthcare", label: "Healthcare" },
                    { value: "finance", label: "Finance" },
                    { value: "retail", label: "Retail" },
                    { value: "manufacturing", label: "Manufacturing" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white text-md font-bold mb-3">
                  Your goals
                </label>
                <div className="space-y-3">
                  <CustomSelect
                    name="yourAge"
                    value={formData.yourAge}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, yourAge: value }))
                    }
                    placeholder="Your age"
                    options={[
                      { value: "18-25", label: "18-25" },
                      { value: "26-35", label: "26-35" },
                      { value: "36-45", label: "36-45" },
                      { value: "46-55", label: "46-55" },
                      { value: "55+", label: "55+" },
                    ]}
                  />

                  <CustomSelect
                    name="growthForecast"
                    value={formData.growthForecast}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        growthForecast: value,
                      }))
                    }
                    placeholder="Growth Forecast"
                    options={[
                      { value: "rapid", label: "Rapid Growth" },
                      { value: "steady", label: "Steady Growth" },
                      { value: "moderate", label: "Moderate Growth" },
                      { value: "stable", label: "Stable" },
                    ]}
                  />

                  <CustomSelect
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectTimeline: value,
                      }))
                    }
                    placeholder="Project Timeline"
                    options={[
                      { value: "immediate", label: "Immediate (1-3 months)" },
                      { value: "short", label: "Short term (3-6 months)" },
                      { value: "medium", label: "Medium term (6-12 months)" },
                      { value: "long", label: "Long term (12+ months)" },
                    ]}
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white text-md font-bold mb-3">
                  Your needs
                </label>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.input
                      id="growing-speed"
                      type="checkbox"
                      checked={formData.needs.includes("growing-speed")}
                      onChange={(e) =>
                        handleNeedsChange("growing-speed", e.target.checked)
                      }
                      className="w-4 h-4 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-[#D2D1D1]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <label
                      htmlFor="growing-speed"
                      className="text-white text-sm"
                    >
                      We&#39;re growing at speed / need people
                    </label>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.input
                      id="talent-function"
                      type="checkbox"
                      checked={formData.needs.includes("talent-function")}
                      onChange={(e) =>
                        handleNeedsChange("talent-function", e.target.checked)
                      }
                      className="w-4 h-4 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-[#D2D1D1]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <label
                      htmlFor="talent-function"
                      className="text-white text-sm"
                    >
                      We need to build a talent function
                    </label>
                  </motion.div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-1"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1] min-h-[80px] resize-vertical"
                  placeholder="Write message..."
                  whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-xs bg-[#EBEBEB] text-[#082B47] font-medium py-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-[#082B47] border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Now
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}