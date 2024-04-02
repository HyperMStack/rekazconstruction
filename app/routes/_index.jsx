import { Box } from "@chakra-ui/react";
import { heroData, projectsData } from "../data/data";
import { Hero } from "../components/index/Hero";
import { Projects } from "../components/index/Projects";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Hero data={heroData} />
      <Projects projects={projectsData} />
    </Box>
  );
}
