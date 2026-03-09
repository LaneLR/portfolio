/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "resale-iq",
    title: "AI Image Analyzer Mobile App",
    description: "AI image analysis mobile application for item identification, valuation, and inventory management.",
    image: `/images/AppDisplayLight.png`,
    link: `projects/resale-iq`,
  },
  {
    id: "planz",
    title: "Planz Calendar App",
    description: "Calendar and scheduling app for creating and tracking events with friends.",
    image: `/images/planzdisplay.png`,
    link: "https://github.com/LaneLR/Planz-Calendar-App",
  },
  {
    id: "pets-adoption",
    title: "Pets Adoption Platform",
    description: "Backend service for a pet adoption platform, built in Java.",
    image: `/images/resaleiq-portfolio-icon.png`,
    link: "https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend",
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    description: "Frontend for an inventory management system.",
    image: `/images/inventoryapp.png`,
    link: "https://github.com/katara-org/inventory-app",
  },
  {
    id: "news-aggregator",
    title: "News Aggregator Service",
    description: "A web application for aggregating and displaying news from various RSS feeds.",
    image: `/images/morningfeeds.png`,
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
      <section className="projects-section">
        <div className="projects-section__heading-container">
            <h2 className="projects-section__heading">Personal Projects</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="projects-grid"
        >
          {PROJECTS.map((project) => (
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
      <Link href={`${project.link}`} className="projects-grid__link">
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
