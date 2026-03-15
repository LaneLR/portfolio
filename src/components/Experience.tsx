"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Verizon",
    role: "Software Engineer",
    period: "March 2025 - Present",
    description:
      "Optimizing webpages for telecommunications brands like Total Wireless, Straight Talk, and Visible. Primarily focused on frontend performance and SEO, and improving user experience for millions of customers.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "SCSS",
      "Redux",
      "Java",
      "Figma",
      "Jira",
      "Jenkins",
      "SonarQube",
    ],
  },
  {
    company: "",
    role: "Multiverse Applied Full Stack Software Engineering Program",
    period: "March 2025 - March 2026",
    description:
      "A full-stack bootcamp that improved my skills. This program began as a 3-month full-stack bootcamp and the last 9 months were spent developing my backend skills (Java Spring Boot, Node.js, Express), refining my frontend skills (React, Next.js, TypeScript), and deepening my understanding of deployment processes and related tools (SonarQube, Github Actions).",
    skills: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Actions",
      "SonarQube",
    ],
  },
  {
    company: "",
    role: "Independent Developer",
    period: "2023 - Present",
    description:
      "Currently building agentic AI agents for apps that are still in development. Some of my other work includes building an item reselling mobile app that serves as an inventory manager and utilzizes AI for price comparison, a fully functional calendar app to make plans with friends, and a news aggregator service to find all of your favorite news sources in one place.",
    skills: [
      "Java",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "JavaScript",
      "HTML",
      "SCSS",
      "Stripe",
      "Capacitor",
      "Vertex AI",
      "Gemini API",
      "GitHub Actions",
      "SonarQube",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ExperienceComponent() {
  return (
    <section className="experience_wrapper" >
      <div className="experience">
        <div className="experience-section">
          <h2 className="projects-section__heading">Experience</h2>
        </div>

        <motion.div
          className="experience__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              className="experience__card"
              variants={cardVariants}
            >
              <div className="experience__time-rail">
                <div className="experience__dot"></div>
                {index !== EXPERIENCES.length - 1 && (
                  <div className="experience__line"></div>
                )}
              </div>

              <div className="experience__content">
                <span className="experience__period">{exp.period}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <h4 className="experience__company">{exp.company}</h4>
                <p className="experience__description">{exp.description}</p>
                <div className="experience__tags">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
