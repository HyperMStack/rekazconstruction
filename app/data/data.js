export const websiteData = {
  websiteName: "Rekaz Construction",
  websiteDescription:
    "Rekaz Construction is a construction company based in Muscat, Oman.",
  // websiteLogo: "/images/logo.png",
};
export const navColors = {
  textColor: "black",
  textHoverColor: "orange",
  backgroundColor: "white",
};

export const navLinks = [
  { id: 1, label: "Home", href: "/" },
  {
    id: 2,
    label: "About",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Contact", href: "/contact" },
];

export const NAV_ITEMS = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];

export const heroData = {
  image: "/images/construction.jpg",
  //   images: [
  //     { id: 1, src: "/images/hero1.jpg" },
  //     { id: 2, src: "/images/hero2.jpg" },
  //     { id: 3, src: "/images/hero3.jpg" },
  //   ],
  text: "Build, Invest",
  typedText: ["Suceed.", "Innovate."],
  buttonText: "Get Started",
};

export const projectsData = [
  { id: 1, title: "Project 1", slug:"project-1", thumbImage: "/images/project1.jpg" },
  { id: 2, title: "Project 2",slug:"project-2", thumbImage: "/images/project2.jpg" },
  { id: 3, title: "Project 3",slug:"project-3", thumbImage: "/images/project3.jpg" },
];
