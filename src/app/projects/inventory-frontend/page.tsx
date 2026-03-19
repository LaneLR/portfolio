import ProjectDetail from "@/components/ProjectDetail";

export default function PlanzPage() {
  const inventoryData = {
    title: "E-commerce Frontend",
    description: "Built during my Verizon apprenticeship to sharpen my database skills.",
    image: "/images/inventoryapp.png",
    repoLink: "https://github.com/LaneLR/inventory-app",
    demoLink: "https://inventory-app-lac-six.vercel.app/",
    techStack: ["JavaScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    durableSkills: ["Critical Thinking", "User-Centric Design", "Agile Methodology"],
    reflection: {
      challenge: "Identifying small objects in varied lighting conditions using mobile cameras.",
      action: "Implemented a pre-processing canvas filter to normalize exposure before sending to the AI model.",
      result: "Increased identification accuracy by 22% in low-light environments.",
      learning: "This project solidified my understanding of the 'Deployment' module, specifically handling heavy AI model weights on serverless functions."
    }
  };

  return <ProjectDetail project={inventoryData} />;
}