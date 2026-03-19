"use client";
import { Github, Globe, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ProjectDetailProps {
  title: string;
  description?: string;
  image: string;
  repoLink: string;
  demoLink?: string;
  techStack: string[];
  durableSkills: string[];
  reflection?: {
    challenge?: string;
    action?: string;
    result?: string;
    learning?: string;
  };
}

export default function ProjectDetail({
  project,
}: {
  project: ProjectDetailProps;
}) {
  return (
    <main className="project-page">
      <div className="project-page__container">
        <Link href="/#projects" className="project-page__back">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <header className="project-page__header">
          <h1 className="project-page__title">{project.title}</h1>
          <p className="project-page__subtitle">{project.description}</p>

          <div className="project-page__actions">
            <a
              href={project.repoLink}
              target="_blank"
              className="project-page__btn project-page__btn--primary"
            >
              <Github size={20} /> View repository
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                className="project-page__btn"
              >
                <Globe size={20} /> Try it yourself
              </a>
            )}
          </div>
        </header>

        <div className="project-page__image-box">
          <img src={project.image} alt={project.title} />
        </div>

        <section className="project-page__skills-grid">
          <div className="project-page__card">
            <h2 className="project-page__heading">Tech Stack</h2>
            <div className="experience__tags">
              {project.techStack.map((tech) => (
                <span className="experience__tag" key={tech}>{tech}</span>
              ))}
            </div> 
          </div>
        </section>

        <section className="project-page__reflection">
          <h2 className="project-page__heading">
            Project Takeaways
          </h2>

          <div className="project-page__carl">
            {project?.reflection?.challenge && (
              <div className="project-page__carl-item">
                <h4>
                  <CheckCircle2 size={16} /> Challenge
                </h4>
                <p>{project.reflection.challenge}</p>
              </div>
            )}

            {project?.reflection?.challenge && (
              <div className="project-page__carl-item">
                <h4>
                  <CheckCircle2 size={16} /> Action
                </h4>
                <p>{project.reflection.action}</p>
              </div>
            )}

            {project?.reflection?.result && (
              <div className="project-page__carl-item">
                <h4>
                  <CheckCircle2 size={16} /> Result
                </h4>
                <p>{project.reflection.result}</p>
              </div>
            )}

            {project?.reflection?.learning && (
              <div className="project-page__carl-item">
                <h4>
                  <CheckCircle2 size={16} /> Learning & Takeaways
                </h4>
                <p>{project.reflection.learning}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
