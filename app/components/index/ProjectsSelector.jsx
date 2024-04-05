import { Box } from "@chakra-ui/react";
import { TitlesSelector } from "./projectsSelector/TitlesSelector";
import { useState } from "react";

export default function ProjectsSelector({ projects }) {
  const projectsTitles = projects.map((project) => ({
    id: project.id,
    title: project.title,
  }));
  const [selectedIndex, setSelectedIndex] = useState(projects[0].id);
  console.log("index", selectedIndex);
  return (
    <Box m={8}>
      <TitlesSelector
        titles={projectsTitles}
        setSelectedIndex={setSelectedIndex}
      />
    </Box>
  );
}
