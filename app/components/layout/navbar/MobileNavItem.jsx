import { useState } from "react";

export function MobileNavItem({ label, children, href }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={children && toggleCollapse}>
      <a
        href={href ?? "#"}
        className="py-2 flex justify-between items-center" //! add decoration:none
      >
        <p className="font-semibold text-white">{label}</p>
        {children && (
          <img
            src="/images/svg/arrow-down.svg"
            alt="open sub-title"
            className={`text-white w-6 h-6 ${
              isOpen ? "rotate-180" : ""
            } transition-all duration-200 ease-in-out`}
          />
        )}
      </a>

      <div
        className={`mt-0 ${
          isOpen ? "" : "hidden"
        } transition-opacity duration-1000 ease-linear`}
      >
        <div className="flex flex-col mt-2 pl-4 border-l border-l-gray-200 items-start text-white">
          {children &&
            children.map((child) => (
              <a key={child.label} className="py-2" href={child.href}>
                {child.label}
              </a>
            ))}
        </div>
      </div>
    </button>
  );
}
