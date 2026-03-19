import ProjectDetail from "@/components/ProjectDetail";

export default function PlanzPage() {
  const inventoryData = {
    title: "Pets Adoption Platform Backend",
    description: "A backend service for a pet adoption platform built by Lane Richardson, Lauren Powell, and Kavya Sri Meka.",
    image: "/images/resaleiq-portfolio-icon.png",
    repoLink: "https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend",
    // demoLink: "https://inventory-app-lac-six.vercel.app/",
    techStack: ["Java", "Spring Boot", ],
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