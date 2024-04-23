import { Hero } from "../components/project/Hero";
import { Info } from "../components/project/Info";
import { websiteData } from "../data/data";

export const meta = () => {
  return [
    { title: websiteData.websiteName },
    { name: "description", content: websiteData.websiteDescription },
  ];
};

export default function project() {
  return (
    <div>
      <Hero />
      <Info />
    </div>
  );
}
