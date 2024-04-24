import { footerLinks, websiteData } from "../../data/data";

export function Footer() {
  return (
    <footer className="text-black md:text-white text-sm font-semibold relative my-auto mt-24 md:-mt-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <p className="text-center md:text-left text-sm w-full">
          &copy; 2023{" "}
          <a href="/" className="hover:underline">
            {websiteData.websiteName}
          </a>
          . All rights reserved.
        </p>
        <div className="md:w-2/5 flex flex-wrap gap-4 justify-around content-around my-4">
          {footerLinks.map((link) => (
            <div key={link.id} className="w-auto">
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
