import Link from "next/link";
import { usePathname } from "next/navigation";

const PROJECTS = [
  {
    id: "resale-iq",
    title: "Resale IQ",
    description: "An AI-driven platform for inventory orchestration.",
    image: "/images/generic-icon.png",
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: "/images/generic-icon.png",
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: "/images/generic-icon.png",
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: "/images/generic-icon.png",
  },
  {
    id: "second",
    title: "Cloud Optimizer",
    description: "Refactored complex DB queries to handle high concurrency.",
    image: "/images/generic-icon.png",
  },
];

export default function ProjectsComponent() {
  return (
    <section className="projects-grid">
      {PROJECTS.map((project) => (
        <div key={project.id} className="projects-grid__item">
          <Link
            href={`/projects/${project.id}`}
            className="projects-grid__link"
          >
            <div className="projects-grid__image-container">
              <img
                src={project.image}
                alt={project.title}
                className="projects-grid__image"
              />
            </div>
            <div className="projects-grid__content">
              <h3 className="projects-grid__title">{project.title}</h3>
              <p className="projects-grid__description">
                {project.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
