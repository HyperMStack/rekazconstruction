export function TitlesSelector({ titles, selectedIndex, setSelectedIndex }) {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto overflow-y-hidden box-border hide-scrollbar">
      {titles.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedIndex(item.id)}
          className={`transition-all duration-200 active:text-gray-700 active:border-b-gray-700 hover:text-gray-700 hover:border-b-gray-700 hover:cursor-pointer border-b-2 ${
            selectedIndex === item.id
              ? "border-b-gray-700"
              : "border-b-gray-400"
          } -mx-2 -mb-4 px-16 pb-3 ${
            selectedIndex === item.id ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
