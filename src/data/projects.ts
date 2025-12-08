interface Project {
  id: number;
  titleKey: string;
  image: string;
  descriptionKey: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    titleKey: "projects.ecoride.title",
    image: "../../public/images/projects/ecoride.png",
    descriptionKey: "projects.ecoride.description",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
    ],
    github: "https://github.com/lndbgaa/EcoRide-v1",
    demo: "https://eco-ride-kappa.vercel.app/",
  },
  {
    id: 2,
    titleKey: "projects.currency-converter.title",
    image: "../../public/images/projects/currency-converter.png",
    descriptionKey: "projects.currency-converter.description",
    technologies: ["React", "TypeScript", "Node.js", "Express.js"],
    github: "https://github.com/lndbgaa/currency-converter",
    demo: "https://currency-converter-pi-six.vercel.app/",
  },
  {
    id: 3,
    titleKey: "projects.weather-app.title",
    image: "../../public/images/projects/weather-app.png",
    descriptionKey: "projects.weather-app.description",
    technologies: ["React"],
    github: "https://github.com/lndbgaa/weather-app-v1",
    demo: "https://citimeteo.netlify.app/",
  },
  {
    id: 4,
    titleKey: "projects.carambar-app.title",
    image: "../../public/images/projects/carambar-app.png",
    descriptionKey: "projects.carambar-app.description",
    technologies: ["React", "Node.js", "Express.js", "SQLite"],
    github: "https://github.com/lndbgaa/carambar-joke-generator",
    demo: "https://lndbgaa.github.io/carambar-joke-generator/",
  },
];
