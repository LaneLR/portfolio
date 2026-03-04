/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const prefix = "/portfolio";

const PERSONAL_PROJECTS = [
  {
    id: "resale-iq",
    title: "Resale IQ",
    description: "An AI-driven platform for inventory orchestration.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
];

const MULTIVERSE_PROJECTS = [
  {
    id: "resale-iq",
    title: "Resale IQ",
    description: "An AI-driven platform for inventory orchestration.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
  {
    id: "third",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
  {
    id: "fourth",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
  {
    id: "fifth",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsComponent() {
  return (
    <div className="projects-container">
      <section className="projects-intro">
        <h1 className="projects-intro__title">Projects</h1>
        <p className="projects-intro__description">
          A collection of systems and interfaces I’ve built, focusing on
          <strong> clean, scalable code</strong> and real-world impact.
        </p>
      </section>

      {/* PERSONAL PROJECTS SECTION */}
      <section className="projects-section">
        <h2 className="projects-section__heading">Personal Projects</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="projects-grid"
        >
          {PERSONAL_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* MULTIVERSE PROJECTS SECTION */}
      <section className="projects-section projects-section__second">
        <h2 className="projects-section__heading">Multiverse Bootcamp</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show" // Starts animating when user scrolls down
          viewport={{ once: true }}
          className="projects-grid"
        >
          {MULTIVERSE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div variants={item} className="projects-grid__item">
      <Link href={`/projects/${project.id}`} className="projects-grid__link">
        <div className="projects-grid__image-container">
          <img
            src={project.image}
            alt={project.title}
            className="projects-grid__image"
          />
        </div>
        <div className="projects-grid__content">
          <h3 className="projects-grid__title">{project.title}</h3>
          <p className="projects-grid__description">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
