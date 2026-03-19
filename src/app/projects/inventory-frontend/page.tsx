import ProjectDetail from "@/components/ProjectDetail";

export default function InventoryPage() {
  const inventoryData = {
    title: "E-commerce Frontend",
    description: "A frontend design for an e-commerce site. This app was built to refine my skills in React and JavaScript.",
    image: "/images/inventoryapp.png",
    repoLink: "https://github.com/LaneLR/inventory-app",
    demoLink: "https://inventory-app-lac-six.vercel.app/",
    techStack: ["JavaScript", "React", "SQLite", "Styled-components"],
    // durableSkills: ["Critical Thinking", "User-Centric Design", "Agile Methodology"],
    reflection: {
      challenge: "Build a frontend for an e-commerce site to display and checkout items.",
      action: "Created components to display and sort items that were populated via SQLite database. Set up a mock account registration and login feature wuth state.",
      result: "A functional frontend experience for an e-commerce site.",
      learning: "How to correctly utilize React components and state, and how to utilize database for data population."
    }
  };

  return <ProjectDetail project={inventoryData} />;
}