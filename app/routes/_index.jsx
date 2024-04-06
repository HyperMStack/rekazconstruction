import { Box } from "@chakra-ui/react";
import { heroData } from "../data/data";
import { Hero } from "../components/index/Hero";
import { websiteData, projects } from "../data/data";
import ProjectsSelector from "../components/index/ProjectsSelector";
import "../styles/global.css";

export const meta = () => {
  return [
    { title: websiteData.websiteName },
    { name: "description", content: websiteData.websiteDescription },
  ];
};

export default function Index() {
  return (
    <Box>
      <Hero data={heroData} />
      <ProjectsSelector projects={projects} />
    </Box>
  );
}
