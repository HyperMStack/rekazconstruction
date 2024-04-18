import { BiChevronRight } from "react-icons/bi";

export function Card({ projectData }) {
  return (
    <div className="relative hover:cursor-pointer">
      <img
        src={projectData.mainImage}
        alt={"project1"}
        className="h-full aspect-3/4 object-cover"
      />
      <div className="absolute bottom-0 right-0 -translate-y-3/4 flex flex-row bg-white group">
        <p className="my-auto pl-0 w-0 opacity-0 group-hover:w-auto group-hover:pl-4 group-hover:opacity-100 transition duration-500 ease-in-out">
          View Project
        </p>
        <BiChevronRight className="text-6xl text-black my-auto" />
      </div>
      <p className="my-4 text-start text-2xl font-semibold">
        {projectData.title}
      </p>
    </div>
  );
}
