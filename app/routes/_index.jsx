import { heroData } from "../data/data";
import { Hero } from "../components/index/Hero";
import { websiteData, projects, sectors } from "../data/data";
import "../styles/global.css";
import { Contact } from "../components/index/Contact";
import { Sectors } from "../components/index/Sectors";
import { StatsIncrement } from "../components/index/StatsIncrement";
import { ProjectsCarousel } from "../components/index/ProjectsCarousel";

export const meta = () => {
  return [
    { title: websiteData.websiteName },
    { name: "description", content: websiteData.websiteDescription },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero data={heroData} />
      <ProjectsCarousel projects={projects} />
      <Sectors sectorsData={sectors} />
      <StatsIncrement />
      <Contact />
    </div>
  );
}
