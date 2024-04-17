import { DesktopSubNav } from "./DesktopSubNav";

export function DesktopNav({ navItems }) {
  return (
    <div className="flex gap-4">
      {navItems.map((navItem) => (
        <div key={navItem.label} className="group py-4 mx-2">
          <div className="relative">
            <a
              className={`p-2 text-base font-normal text-gray-100 hover:text-gray-300`} //! add decoration: none
              href={navItem.href ?? "#"}
            >
              {navItem.label}
            </a>

            {navItem.children && (
              <div className="top-10 left-0  min-w-80 hidden absolute border-0 shadow-xl bg-white p-4 rounded-xl group-hover:block">
                <div className="flex flex-col">
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
