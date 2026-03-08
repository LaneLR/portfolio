"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Multiverse",
    role: "Software Engineering Apprentice",
    period: "2024 - Present",
    description:
      "Developing full-stack applications using Next.js and Node.js while collaborating with cross-functional teams.",
    skills: ["React", "TypeScript", "PostgreSQL", "Agile"],
  },
  {
    company: "Previous Tech Corp",
    role: "Junior Web Developer",
    period: "2022 - 2023",
    description:
      "Optimized frontend performance and maintained legacy PHP systems for enterprise clients.",
    skills: ["JavaScript", "Sass", "PHP", "MySQL"],
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
    <section className="experience" id="experience">
      <div className="projects-section__heading-container">
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
    </section>
  );
}
