"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const opportunities = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Soup Inc",
    location: "Remote",
    timeAgo: "Posted 2 days ago",
    salary: "$120k - $150k",
    description:
      "Lead development of scalable web applications in a fast-growing fintech startup.",
    skills: ["React", "Node.js", "AWS"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Labs",
    location: "Hybrid",
    timeAgo: "Posted 1 week ago",
    salary: "$100k - $130k",
    description:
      "Drive product strategy and roadmap for AI-powered healthcare solutions.",
    skills: ["Strategy", "Analytics", "Agile"],
    buttonText: "Apply Now",
    buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
    featured: true,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "On-site",
    timeAgo: "Posted 3 days ago",
    salary: "$80k - $110k",
    description:
      "Create intuitive user experiences for enterprise software solutions.",
    skills: ["Figma", "Research", "Prototyping"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Meta",
    location: "Remote",
    timeAgo: "Posted 4 days ago",
    salary: "$110k - $140k",
    description:
      "Build cutting-edge user interfaces for billions of users worldwide.",
    skills: ["React", "TypeScript", "GraphQL"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Netflix",
    location: "Hybrid",
    timeAgo: "Posted 5 days ago",
    salary: "$130k - $160k",
    description:
      "Analyze user behavior and optimize content recommendation algorithms.",
    skills: ["Python", "ML", "Statistics"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Amazon",
    location: "On-site",
    timeAgo: "Posted 1 week ago",
    salary: "$115k - $145k",
    description:
      "Scale infrastructure and improve deployment processes for AWS services.",
    skills: ["AWS", "Docker", "Kubernetes"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
];

export default function LiveOpportunities() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Changed to false to allow re-animation
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      },
    },
    hover: {
      y: -10,
      rotateZ: -0.5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      y: -50, 
      opacity: 0,
      scale: 0.95 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.8 
      },
    },
  };

  const pulseVariants: Variants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 py-16 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-xl"
        animate={{
          x: [0, 10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full blur-xl"
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Animated Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2 
          className="text-5xl font-bold text-slate-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Live Opportunities
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-blue-500 mx-auto mb-4 rounded-full"
        />
        <motion.p 
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Explore current openings with our partner companies across various
          industries
        </motion.p>
      </motion.div>

      {/* Swiper Slider with Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="pb-16 relative z-10"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {opportunities.map((opportunity) => (
            <SwiperSlide key={opportunity.id}>
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <div
                  className={`rounded-2xl p-6 transition-all duration-300 flex flex-col h-full relative overflow-hidden group ${
                    opportunity.featured
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  {/* Shine effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                    initial={{ translateX: "-100%" }}
                    whileHover={{ translateX: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Featured badge */}
                  {opportunity.featured && (
                    <motion.div 
                      className="absolute -top-3 -right-3"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                    >
                      <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Header with badges */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        opportunity.featured
                          ? "bg-slate-700 text-slate-200 border border-slate-600"
                          : "bg-slate-800 text-white"
                      }`}
                    >
                      {opportunity.location.split(" - ")[1] || opportunity.location}
                    </motion.span>
                    <span
                      className={`text-sm ${
                        opportunity.featured ? "text-slate-300" : "text-gray-500"
                      }`}
                    >
                      {opportunity.timeAgo}
                    </span>
                  </div>

                  {/* Job Title */}
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className={`text-2xl font-bold mb-2 ${
                      opportunity.featured ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {opportunity.title}
                  </motion.h3>

                  {/* Company and Salary */}
                  <div
                    className={`text-lg mb-6 ${
                      opportunity.featured ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    <div className="font-semibold">{opportunity.company}</div>
                    <motion.div
                      variants={pulseVariants}
                      initial="initial"
                      whileHover="pulse"
                      className={`text-base ${
                        opportunity.featured ? "text-slate-300" : "text-gray-600"
                      }`}
                    >
                      {opportunity.salary}
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-base mb-6 leading-relaxed ${
                      opportunity.featured ? "text-slate-200" : "text-gray-600"
                    }`}
                  >
                    {opportunity.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-3 py-1 rounded-lg text-sm ${
                            opportunity.featured
                              ? "bg-slate-700 text-slate-200"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          • {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${opportunity.buttonStyle}`}
                    >
                      {opportunity.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination mt-8 flex justify-center gap-2" />
      </motion.div>

      {/* View All Button */}
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {/* <motion.button
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#1e293b",
            color: "#fff"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full border-2 border-slate-800 text-slate-800 font-semibold transition-colors"
        >
          View All Opportunities
        </motion.button> */}
      </motion.div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .custom-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-color: #cbd5e1;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background-color: #1e293b;
          width: 30px;
          border-radius: 8px;
        }

        .custom-pagination {
          position: relative;
          bottom: 0;
          width: 100%;
          z-index: 10;
        }
      `}</style>
    </section>
  );
}