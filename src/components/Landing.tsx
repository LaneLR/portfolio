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
          {/* <span className="hero__title--left">
            Engineering
          </span>
          <span className="hero__title--center hero__title--secondary">
            Scalable
          </span>
          <span className="hero__title--right">Experiences.</span> */}
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          Hi, I&apos;m <strong className="hero__strong">Lane Richardson</strong>
          ! I&apos;m a{" "}
          <strong className="hero__strong">
            junior full-stack Software Engineer
          </strong>{" "}
          who specializes in the frontend.
        </motion.p>
        <motion.p className="hero__subtitle" variants={itemVariants}>
          As a self-taught developer, I received my first software engineering
          role at{" "}
          <strong className="hero__strong">Verizon Communications</strong> as an
          apprentice where I received mentorship from senior engineers and
          refined my skills designing and building scalable production-ready web
          applications.
        </motion.p>
        <motion.p className="hero__subtitle" variants={itemVariants}>
          You can see much of my work on large-brand websites like{" "}
          <strong className="hero__strong">Total Wireless</strong>,{" "}
          <strong className="hero__strong">Straight Talk</strong>, and{" "}
          <strong className="hero__strong">Visible</strong>! And if you&apos;re
          interested, take a look at my projects as well! 
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
      <div className="landing__decoration" aria-hidden="true"></div>
    </main>
  );
}
