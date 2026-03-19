import ProjectDetail from "@/components/ProjectDetail";

export default function NewsPage() {
  const inventoryData = {
    title: "News Aggregator SaaS",
    description: "A news aggregation service that pulls and displays article information from hundreds of news sources via RSS feeds.",
    image: "/images/morningfeeds.png",
    repoLink: "https://github.com/LaneLR/news-aggregator-app",
    demoLink: "https://news-aggregator-app-ecru.vercel.app/",
    techStack: ["JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Styled-components"],
    // durableSkills: ["Critical Thinking", "User-Centric Design", "Agile Methodology"],
    reflection: {
      challenge: "Create a software-as-a-service (SaaS) app using Stripe for membership tiers and paid subscriptions.",
      action: "Created background workers to periodically search and pull new non-duplicate articles from a list of RSS feeds from media providers. Used a Postgres database to store available non-copyrighted content (title, article image, description, source). Build database schema to enable users to create accounts, like and save articles for future use, and subscribe and maintain a subscription tier via Stripe to access more content.",
      result: "A functional news aggregation service that users can subscribe to, to access more content.",
      learning: "Better handling of Next.js server and client components, and how to integrate Stripe API into a project for tiered membership. "
    }
  };

  return <ProjectDetail project={inventoryData} />;
}