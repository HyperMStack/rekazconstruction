export function Sectors({ sectorsData }) {
  return (
    <div className="py-8 px-4 rounded-lg">
      <h2 className="text-center text-5xl font-bold mb-4">Our Sectors</h2>
      <div className="flex flex-wrap justify-center">
        {sectorsData.map((sector, i) => (
          <div className="m-4 max-w-96 text-start" key={i}>
            <img
              src={sector.icon}
              alt={sector.title}
              className="mb-4 aspect-square w-36"
            />
            <p className="text-2xl font-bold mb-2">{sector.title}</p>
            <p>{sector.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
