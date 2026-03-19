import ProjectDetail from "@/components/ProjectDetail";

export default function PlanzPage() {
  const plansData = {
    title: "Planz Calendar App",
    description: "Built during my Verizon apprenticeship to sharpen my database skills. This app acts as a personal calendar that lets users register an account, invite friends, and create plans for themselves and their friends.",
    image: "/images/planzdisplay.png",
    repoLink: "https://github.com/LaneLR/Planz-Calendar-App",
    demoLink: "https://planz-calendar-app.vercel.app/",
    techStack: ["JavaScript", "React", "Next.js", "PostgreSQL", "SCSS"],
    // durableSkills: ["Debugging", "", ],
    reflection: {
      challenge: "Create a functional frontend that also provides good user experience.",
      action: "Implemented 'React Big Calendar' as the basis of the frontend. Built other pages using customized React components. Connected a Postgres database for creating accounts and events.",
      result: "A fully functional calendar that lets users make an account, and create events with other users.",
      learning: "A better understanding of the relationship between the frontend and backend, and how to set up a working database in Postgres."
    }
  };

  return <ProjectDetail project={plansData} />;
}