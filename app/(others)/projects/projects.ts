import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Portfolio",
    mainType: "typescript",
    previewLink: "https://v2portfolio-uniqueusmans-projects.vercel.app/",
    previewImg: "/projects/portfolio.png",
    category: ["Typescript", "NextJs"],
    description: "My current portfolio website.",
    githubUrl: "https://github.com/Unique-Usman/v2portfolio",
  },
  {
    name: "DesignIT Africa",
    mainType: "JavaScript",
    previewLink: "https://www.designitafrica.org/",
    previewImg: "/projects/designitafrica.png",
    category: ["JavaScript", "HTML5", "CSS3"],
    description: "Official Website for DesignIT Africa",
  },
  {
    name: "SuperVaani",
    mainType: "typescript",
    previewImg: "/projects/supervaani.png",
    category: ["JavaScript", "HTML3", "CSS3", "Python", "Flask", "Nginx", "Haproxy", "LangChain"],
    description: "A FullStack RAG Application for my College"
  },
  {
    name: "Systemd",
    mainType: "C",
    previewLink: "https://github.com/systemd/systemd/pulls?q=is%3Apr+author%3AUnique-Usman",
    previewImg: "/projects/systemd.png",
    category: ["C", "Linux", "Bash Scripting", "OpenSource Contributions"],
    githubUrl : "https://github.com/systemd/systemd/pulls?q=is%3Apr+author%3AUnique-Usman",
    description: "The systemd System and Service Manager"
  },
];

export default projects;
