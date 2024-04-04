import { Box } from "@chakra-ui/react";
import { heroData, projectsData } from "../data/data";
import { Hero } from "../components/index/Hero";
import { Projects } from "../components/index/Projects";
import { websiteData } from "../data/data";

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
      <Projects projects={projectsData} />
    </Box>
  );
}
