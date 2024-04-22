import { footerLinks, websiteData } from "../../data/data";

export function Footer() {
  return (
    <footer className="text-white text-sm font-semibold relative -mt-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <p className="text-left text-sm w-full">
          &copy; 2023{" "}
          <a href="/" className="hover:underline">
            {websiteData.websiteName}
          </a>
          . All rights reserved.
        </p>
        <div className="w-2/5 flex flex-wrap justify-between">
          {footerLinks.map((link) => (
            <a key={link.id} href={link.href} className="hover:text-gray-600">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
