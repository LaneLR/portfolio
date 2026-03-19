"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { easeOut } from "framer-motion";

export default function LandingClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <main className="landing">
      <motion.section
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
<motion.h1 className="hero__title" variants={itemVariants}>
          <span>Meet</span> <span className="hero__title--accent">Lane</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          I&apos;m a{" "}
          <strong className="hero__strong">Full-stack Software Engineer</strong>{" "} at {" "} 
          <strong className="hero__strong">Verizon</strong>{" "}
          where I specialize
          in modernizing legacy systems into React, Next.js and TypeScript, and
          enhancing user experience for large brands like{" "}
          <strong className="hero__strong">Total Wireless</strong>{" "}
          {/* <strong className="hero__strong">Straight Talk</strong>,  */}
          and <strong className="hero__strong">Visible</strong>.
        </motion.p>
       
        <motion.p className="hero__subtitle" variants={itemVariants}>
          I&apos;m currently developing an{" "}
          <strong className="hero__strong">AI-focused iOS mobile app</strong>{" "}
          and building a custom{" "}
          <strong className="hero__strong">AI agent</strong> using Python and
          LangChain. By integrating Tavily for real-time web research, I&apos;m
          building a tool that moves beyond simple chat to autonomous task
          execution. If you are interested, feel free to explore the rest of my projects below!
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <Link href="/#projects" className="hero__btn hero__btn--primary">
            View Projects
          </Link>
          <Link href="/#contact" className="hero__btn hero__btn--secondary">
            Talk to Me
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
