import ContactComponent from "@/components/Contact";
import ExperienceComponent from "@/components/Experience";
import LandingClient from "@/components/Landing";
import ProjectsComponent from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section id="home">
        <LandingClient />
      </section>
      <section id="experience" className="experience__wrapper">
        <ExperienceComponent />
      </section>
      <section id="projects">
        <ProjectsComponent />
      </section>
      <section id="contact">
        <ContactComponent />
      </section>
    </>
  );
}
