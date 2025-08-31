"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

import image1 from "@/assets/success/1.jpg";
import image2 from "@/assets/success/2.jpg";
import image3 from "@/assets/success/3.jpg";

import type { StaticImageData } from "next/image";

interface SuccessStory {
  id: number;
  name: string;
  title: string;
  image: string | StaticImageData;
  skills: string[];
  description: string;
  cardStyle: "light" | "dark" | "gray";
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Senior Software Engineer",
    image: image1,
    skills: ["React", "Node.js", "AWS"],
    description: "Placed at TechCorp with 40% salary increase",
    cardStyle: "light",
  },
  {
    id: 2,
    name: "Maria Garcia",
    title: "Product Manager",
    image: image2,
    skills: ["Strategy", "Analytics", "Agile"],
    description: "Transitioned to fintech leadership role",
    cardStyle: "dark",
  },
  {
    id: 3,
    name: "James Wilson",
    title: "UX Designer",
    image: image3,
    skills: ["Figma", "Research", "Prototyping"],
    description: "Joined unicorn startup as Design Lead",
    cardStyle: "gray",
  },
];

const SuccessStoryCard: React.FC<{ story: SuccessStory; index: number }> = ({ story, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const cardClasses = {
    light: "bg-white border border-gray-200 text-slate-900",
    dark: "bg-gradient-to-br from-slate-800 to-slate-900 text-white",
    gray: "bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 text-slate-900",
  };

  const descriptionClasses = {
    light: "text-gray-700",
    dark: "text-slate-300",
    gray: "text-gray-700",
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotateY: -15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 150, damping: 12 } },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`${cardClasses[story.cardStyle]} rounded-2xl overflow-hidden shadow-lg relative`}
    >
      {story.cardStyle === "dark" && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      )}

      <motion.div className="relative w-full h-48 overflow-hidden" variants={imageVariants}>
        <Image src={story.image} alt={story.name} fill className="object-cover rounded-t-2xl" />
        <div className="absolute inset-0" />
      </motion.div>

      <motion.div className="p-6 space-y-4" variants={contentVariants}>
        <div>
          <motion.h3 className="text-xl font-bold mb-1" variants={itemVariants}>
            {story.name}
          </motion.h3>
          <motion.p
            className={`text-sm font-medium ${story.cardStyle === "dark" ? "text-slate-300" : "text-gray-500"}`}
            variants={itemVariants}
          >
            {story.title}
          </motion.p>
        </div>

        <motion.ul className="list-disc pl-5 space-y-1 text-sm" variants={contentVariants}>
          {story.skills.map((skill, i) => (
            <motion.li key={i} variants={itemVariants} whileHover={{ x: 5 }}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p className={`text-sm ${descriptionClasses[story.cardStyle]} font-medium`} variants={itemVariants}>
          {story.description}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring" as const, stiffness: 200 }}
      >
        SUCCESS
      </motion.div>
    </motion.div>
  );
};

const SuccessStories: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 10, duration: 0.8 } },
  };

  const glowEffect: Variants = {
    hidden: { textShadow: "0 0 0px rgba(59, 130, 246, 0)" },
    visible: {
      textShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 20px rgba(59, 130, 246, 0.6)",
        "0 0 10px rgba(59, 130, 246, 0.3)",
        "0 0 5px rgba(59, 130, 246, 0.1)",
      ],
      transition: { duration: 2, times: [0, 0.5, 0.8, 1], repeat: Infinity, repeatDelay: 3 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Background decorative blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2 className="text-5xl font-bold text-slate-800 mb-4" variants={titleVariants}>
            Our Success Stories
          </motion.h2>
          <motion.div variants={titleVariants}>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" variants={glowEffect}>
              Explore current openings with our partner companies across various industries
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-500 !opacity-100",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          loop={true}
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <SuccessStoryCard story={story} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-8 gap-2"></div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;
