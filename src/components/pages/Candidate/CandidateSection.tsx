"use client";
import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion"; // ✅ import easing

import EmployerBrandingSection from "../home/employee/EmployeBrandingSection";
import LiveOpportunities from "../liveOpurtunuites/liveOpertunites";
import SuccessStories from "../home/successStories/successStories";

// Different animation variants for variety
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: easeOut, // ✅ use easing function
      staggerChildren: 0.1
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: easeOut // ✅
    } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: easeOut // ✅
    } 
  },
};

const CandidateSection = () => {
  return (
    <div className="bg-white" id="candidates">
      {/* First section - fadeInUp */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <EmployerBrandingSection />
      </motion.div>

      {/* Second section - different animation for variety */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
        transition={{ delay: 0.2 }}
      >
        <LiveOpportunities />
      </motion.div>

      {/* Third section - another variation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <SuccessStories />
      </motion.div>
    </div>
  );
};

export default CandidateSection;
