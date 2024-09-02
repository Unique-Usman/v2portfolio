import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Portfolio",
    mainType: "typescript",
    previewLink: "https://uniqueusman.tech",
    previewImg: "/projects/portfolio.png",
    category: ["Typescript", "NextJs"],
    description: "My current portfolio website.",
    githubUrl: "https://github.com/Unique-Usman/v2portfolio",
  },
  {
    name: "DesignIT Africa",
    mainType: "JavaScript",
    previewLink: "https://designit1.netlify.app",
    previewImg: "/projects/designitafrica.png",
    category: ["JavaScript", "HTML5", "CSS3"],
    description: "Official Website for DesignIT Africa",
  },
  {
    name: "SuperVaani",
    mainType: "typescript",
    previewImg: "/projects/supervaani.png",
    category: ["JavaScript", "HTML3", "CSS3", "Python", "Flask", "Nginx", "Haproxy", "LangChain"],
    previewLink: "",
    description: "A FullStack RAG Application for my College"
  }
];

export default projects;
