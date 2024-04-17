import Masonry from "react-masonry-css";

export function ProjectImageGallery({ selectedProject }) {
  const imagesArray = selectedProject?.images;
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="mt-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={selectedProject.title + "_" + index}
          />
        ))}
      </Masonry>
    </div>
  );
}