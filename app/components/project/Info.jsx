const projectData = {
  title: "Project's Data",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam tenetur dolorem ullam dolores animi corporis illum harum. Obcaecati soluta a atque culpa ipsam necessitatibus asperiores facere modi eos mollitia. Molestiae vitae minima laudantium, sapiente nostrum ipsa, facilis, voluptates perferendis quaerat inventore quidem eligendi. A deserunt culpa necessitatibus aperiam illo commodi, dolorum similique eaque. Distinctio porro officiis ipsa? Laboriosam, alias!",
  clientName: "Client's name",
  sector: "Buildings",
  location: "Muscat, Oman",
};
export function Info() {
  return (
    <div className="my-12 mx-6">
      <div className="my-6">
        <h1 className="my-6 text-3xl font-semibold">Project Title</h1>
        <p className="text-lg">{projectData.description}</p>
      </div>
      <h4 className="text-xl font-semibold my-3">Client</h4>
      <p className="text-lg">{projectData.clientName}</p>
      <h4 className="text-xl font-semibold my-3">Sector</h4>
      <p className="text-lg">{projectData.sector}</p>
      <h4 className="text-xl font-semibold my-3">Location</h4>
      <p className="text-lg">{projectData.location}</p>
    </div>
  );
}
