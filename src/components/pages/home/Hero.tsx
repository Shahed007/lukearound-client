"use client";

import Link from "next/link";
import heroImage from "@/assets/hero.png";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const spring = { type: "spring" as const, stiffness: 150, damping: 10 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const hiVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0, transition: spring },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: { delay: i * 0.2, type: "spring" as const, stiffness: 200, damping: 12 },
  }),
  hover: { scale: 1.5, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
};

const headingVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const underlineVariants: Variants = {
  hidden: { width: 0 },
  visible: { width: "42%", transition: { delay: 1, duration: 0.8, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: 5 },
  visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15, duration: 0.8 } },
  hover: { scale: 1.02, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  hover: { scale: 1.05, y: -5, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 },
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <section className="xl:min-h-[76vh] py-20 xl:py-0 flex items-center overflow-hidden bg-[#d2e7ec]">
      <div className="custom-container gap-10 flex lg:flex-row flex-col">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex-1"
        >
          <div className="flex xl:mb-0 mb-5 gap-3">
            <motion.h2 variants={hiVariants} className="xl:text-[81px] text-[50px] font-poppins font-bold text-primary tracking-wide">
              Hi
            </motion.h2>
            <ul className="flex items-center gap-3 mt-11">
              {[0, 1, 2].map((i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={dotVariants}
                  whileHover="hover"
                  className="size-2 rounded-full bg-accent"
                />
              ))}
            </ul>
          </div>

          <motion.h1 variants={headingVariants} className="text-[60px] sm:leading-30 leading-20 sm:text-[100px] xl:text-[123px] border-l-10 border-background text-background pl-[6px] font-bold font-poppins">
            How Ya{" "}
            <span className="block">
              <motion.span className="relative">
                Doing?
                <motion.span variants={underlineVariants} className="block h-[10px] bg-background absolute bottom-2 left-0" style={{ originX: 0 }} />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="sm:text-xl font-inter text-dark-text mt-6 mb-[52px]">
            You wouldn’t let a tourist lead your expedition. So why let a recruiter hire your specialist? Let someone who’s done the job, build your team.
          </motion.p>

          <motion.div variants={containerVariants} className="mt-[52px] flex sm:flex-row flex-col md:items-center gap-6">
            <motion.div variants={itemVariants}>
              <Link href="#clients" scroll>
                <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" className="btn btn-primary">
                  Clients
                </motion.button>
              </Link>
            </motion.div>

            <motion.span variants={itemVariants} className="text-xl text-center">
              or
            </motion.span>

            <motion.div variants={itemVariants}>
              <Link href="#candidates" scroll>
                <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" className="btn btn-secondary">
                  Candidates
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={imageVariants} initial="hidden" animate={controls} whileHover="hover" className="flex-1 lg:self-start w-full h-full self-end">
          <Image src={heroImage} alt="Hero Image" className="size-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
