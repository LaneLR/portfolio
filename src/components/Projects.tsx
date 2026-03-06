/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const prefix = "/portfolio";

// const PERSONAL_PROJECTS = [
//   {
//     id: "resale-iq",
//     title: "Resale IQ",
//     description: "An AI-driven platform for inventory orchestration.",
//     image: `${prefix}/images/resaleiq-portfolio-icon.png`,
//     link: "projects/resale-iq",
//   },
//   {
//     id: "second",
//     title: "Cloud Optimizer",
//     description: "Refactored complex DB queries to handle high concurrency.",
//     image: `${prefix}/images/resaleiq-portfolio-icon.png`,
//     link: "https://github.com/katara-org/inventory-app",
//   },
// ];

const MULTIVERSE_PROJECTS = [
  {
    id: "resale-iq",
    title: "AI Image Analyzer Mobile App",
    description: "AI image analysis mobile application for item identification, valuation, and inventory management.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
    link: `projects/resale-iq`,
  },
  {
    id: "planz",
    title: "Planz Calendar App",
    description: "Calendar and scheduling app for creating and tracking events with friends.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
    link: "https://github.com/LaneLR/Planz-Calendar-App",
  },
  {
    id: "pets-adoption",
    title: "Pets Adoption Platform",
    description: "Backend service for a pet adoption platform, built in Java.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
    link: "https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend",
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    description: "Frontend for an inventory management system.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
    link: "https://github.com/katara-org/inventory-app",
  },
  {
    id: "news-aggregator",
    title: "News Aggregator App",
    description: "A web application for aggregating and displaying news from various RSS feeds.",
    image: `${prefix}/images/resaleiq-portfolio-icon.png`,
    link: "https://github.com/LaneLR/news-aggregator-app",
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
          This is a list of projects and applications I&apos;ve built and collaborated on.</p>
      </section>

      {/* PERSONAL PROJECTS SECTION */}
      <section className="projects-section">
        <h2 className="projects-section__heading">Projects</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="projects-grid"
        >
          {MULTIVERSE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* MULTIVERSE PROJECTS SECTION */}
      {/* <section className="projects-section projects-section__second">
        <h2 className="projects-section__heading">Multiverse Bootcamp</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show" 
          viewport={{ once: true }}
          className="projects-grid"
        >
          {MULTIVERSE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section> */}
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div variants={item} className="projects-grid__item">
      <Link href={`${project.link}`} target="_blank" className="projects-grid__link">
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
