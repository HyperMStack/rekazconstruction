import { FaAngleRight } from "react-icons/fa";

export function DesktopSubNav({ label, href, subLabel }) {
  return (
    <a className="block p-2 rounded-md hover:bg-orange-50 group" href={href}>
      <div className="flex items-center">
        <div>
          <p className="transition-all duration-300 ease-in-out font-medium group-hover:text-orange-400">
            {label}
          </p>
          <p className="text-sm">{subLabel}</p>
        </div>
        <div className="transition-all duration-300 ease-in-out -translate-x-[10%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 justify-end items-center flex flex-1">
          <FaAngleRight className="text-pink-400 w-5 h-5" />
        </div>
      </div>
    </a>
  );
}
