import { Box, Text, Center } from "@chakra-ui/react";
import { TitlesSelector } from "./projectsSelector/TitlesSelector";
import { useState } from "react";
import { ProjectImageGallery } from "./projectsSelector/ProjectImageGallery";

export default function ProjectsSelector({ projects }) {
  const projectsTitles = projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));
  const [selectedIndex, setSelectedIndex] = useState(projects[0].id);
  return (
    <Box m={8}>
      <Center>
        <Text fontSize={"5xl"} color={"gray.800"} as={"b"} my={4}>
          Our Projects
        </Text>
      </Center>
      <TitlesSelector
        titles={projectsTitles}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <ProjectImageGallery selectedProject={projects[selectedIndex - 1]} />
    </Box>
  );
}
