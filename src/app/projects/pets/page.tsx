import ProjectDetail from "@/components/ProjectDetail";

export default function PetsPage() {
  const inventoryData = {
    title: "Pets Adoption Platform Backend",
    description: "A backend service for a pet adoption platform that allows users to select pets to adopt and fill out applications for. Built by Lane Richardson, Lauren Powell, and Kavya Sri Meka.",
    image: "/images/resaleiq-portfolio-icon.png",
    repoLink: "https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend",
    // demoLink: "https://inventory-app-lac-six.vercel.app/",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    // durableSkills: ["Critical Thinking", "User-Centric Design", "Agile Methodology"],
    reflection: {
      challenge: "Build a backend service in Java and Spring Boot.",
      action: "Built a set of APIs for registering users, submitting applications to adopt a pet, and adding pets to the database.",
      result: "Created a functional backend that allows users to register and adopt pets.",
      learning: "How to make functional APIs in Spring Boot."
    }
  };

  return <ProjectDetail project={inventoryData} />;
}