export function Hero() {
  return (
    <>
      <div
        className="h-128 w-auto bg-cover md:h-172 md:w-full md:bg-top md:bg-no-repeat md:bg-contain md:bg-fixed"
        style={{ backgroundImage: `url(/images/project.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      </div>
    </>
  );
}
