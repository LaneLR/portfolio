"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Verizon",
    role: "Software Engineer I",
    period: "2025 - Present",
    description:
      "Modernizing high-traffic webpages for leading telecommunications brands, including Total Wireless and Visible, optimizing frontend performance, user experience, and accessibility for millions of users.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "SCSS"],
  },
  {
    company: "",
    role: "Independent Full-stack Developer",
    period: "2023 - Present",
    description:
      "Developing a variety of projects, including an AI image analysis mobile app, a calendar and scheduling application, and a news aggregator service.",
    skills: ["Java", "Python", "React", "Next.js", "Node.js", "Express", "TypeScript", "JavaScript", "HTML", "SCSS", "Stripe", "Capacitor", "Vertex AI", "Gemini API", ],
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
