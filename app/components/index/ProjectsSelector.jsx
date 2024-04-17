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
    <div className="m-8 max-w-[1350px] mx-auto">
      <div className="text-center my-4">
        <b className="text-5xl text-gray-800">Our Projects</b>
      </div>
      <TitlesSelector
        titles={projectsTitles}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <ProjectImageGallery selectedProject={projects[selectedIndex - 1]} />
    </div>
  );
}
