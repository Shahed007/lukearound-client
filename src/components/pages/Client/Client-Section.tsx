"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";

import WhatWeAre from "../home/whatWeAre/WhatWeAre";
import TechnologyIntelligence from "../home/technologyIntelignce/TechnologyInteligence";
import HowItWorks from "../home/howItWork/HowItWork";
import PricingSection from "../home/pricing/Pricing";
import TestimonialsCarousel from "../home/testimonial/Testimonial";

// Corrected fadeInUp variant using easing function
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: easeOut // ✅ use easing function
    } 
  },
};

// Reusable animated section component
type AnimatedSectionProps = {
  children: React.ReactNode;
  variants?: typeof fadeInUp;
  amount?: number;
  delay?: number;
  className?: string;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  variants = fadeInUp, 
  amount = 0.2,
  delay = 0,
  className = "" 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ClientSection = () => {
  return (
    <div className="bg-white mb-6" id="clients">
      <AnimatedSection amount={0.15} delay={0.1}>
        <WhatWeAre />
      </AnimatedSection>

      <AnimatedSection amount={0.2}>
        <TechnologyIntelligence />
      </AnimatedSection>

      <AnimatedSection amount={0.25} delay={0.2}>
        <HowItWorks />
      </AnimatedSection>

      <AnimatedSection amount={0.2}>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection amount={0.3} delay={0.1}>
        <TestimonialsCarousel />
      </AnimatedSection>
    </div>
  );
};

export default ClientSection;
