export function Card({ projectData }) {
  return (
    <div className="relative hover:cursor-pointer">
      <img
        src={projectData.mainImage}
        alt={"project1"}
        className="h-full aspect-3/4 object-cover"
      />
      <div className="absolute bottom-0 right-0 -translate-y-3/4 flex flex-row bg-white group/card">
        <p className="my-auto font-medium overflow-hidden relative pl-0 left-14 opacity-0 w-0 group-hover/card:pl-4 group-hover/card:opacity-100 group-hover/card:left-0 group-hover/card:w-full transition-all duration-300">
          View Project
        </p>
        <img
          src="/images/svg/arrow-right.svg"
          alt="view project"
          className="w-[3.75rem] h-[3.75rem] text-black my-auto"
        />
      </div>
      <p className="my-4 text-start text-2xl font-semibold">
        {projectData.title}
      </p>
    </div>
  );
}
