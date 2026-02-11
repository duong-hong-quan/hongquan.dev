import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import LogoJavascript from "../../public/images/logos/icon-javascript.svg";
import LogoTypescript from "../../public/images/logos/icon-typescript.svg";
import LogoReact from "../../public/images/logos/icon-react.svg";
import LogoNextjs from "../../public/images/logos/icon-nextjs.svg";
import LogoNodejs from "../../public/images/logos/icon-nodejs.svg";
import LogoNest from "../../public/images/logos/icon-nest.svg";
import LogoPostgreSQL from "../../public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "../../public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "../../public/images/logos/icon-tailwindcss.svg";
import LogoGit from "../../public/images/logos/icon-git.svg";
import LogoCsharp from "../../public/images/logos/icon-csharp.png";
import LogoMysql from "../../public/images/logos/icon-mysql.png";
import LogoDocker from "../../public/images/logos/icon-docker.png";
import LogoPython from "../../public/images/logos/icon-python.png";

import FPTSoftware from "../../public/images/logos/fpt_software.png";
import YAS from "../../public/images/logos/yas.png";
import TGLSolutions from "../../public/images/logos/tgl_solutions.png";
import AvatarImage from "../../public/images/avatar.jpg";
import CovidTest from "../../public/images/covid.jpg";
import Signature from "../../public/images/sig.jpg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/duong-hong-quan",
  GITHUB_REPO: "https://github.com/duong-hong-quan/hongquan.dev",
  TWITTER: "https://twitter.com/hongquan0312",
  FIGMA: "https://www.figma.com/@hongquan",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/duong-hong-quan",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hongquan0312/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "C#",
    logo: LogoCsharp,
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MySQL",
    logo: LogoMysql,
    url: "https://www.mysql.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: TGLSolutions,
    logoAlt: "TGL Solutions logo",
    position: "Project Manager",
    startDate: new Date(2026, 0),
    currentlyWorkHere: true,
    summary: [
      "Leading and managing software development teams to deliver high-quality projects.",
      "Overseeing project planning, risk management, and resource allocation.",
      "Mentoring team members and fostering a collaborative development environment.",
      "Coordinating with stakeholders to define project requirements and timelines.",
      "Implementing best practices in software development and project management.",
      "Conducting performance reviews and providing technical guidance to team members.",
    ],
  },
  {
    logo: TGLSolutions,
    logoAlt: "TGL Solutions logo",
    position: "Middle Software Engineer",
    startDate: new Date(2025, 6),
    endDate: new Date(2026, 0),
    summary: [
      "Developed and maintained enterprise web applications using ASP.NET and ASP.NET MVC.",
      "Designed and implemented scalable backend solutions and RESTful APIs.",
      "Collaborated with cross-functional teams to deliver complex features.",
      "Optimized application performance and database queries.",
      "Participated in code reviews and mentored junior developers.",
      "Contributed to architectural decisions and technical documentation.",
      "Implemented automated testing and CI/CD pipelines.",
    ],
  },
  {
    logo: TGLSolutions,
    logoAlt: "TGL Solutions logo",
    position: "Junior Software Engineer",
    startDate: new Date(2025, 2),
    endDate: new Date(2025, 6),
    summary: [
      "Developed web applications using ASP.NET framework.",
      "Worked on both front-end and back-end development tasks.",
      "Collaborated with senior developers to implement new features.",
      "Participated in daily stand-ups and sprint planning meetings.",
      "Performed unit testing and bug fixes to ensure code quality.",
      "Learned and applied software development best practices.",
    ],
  },
  {
    logo: YAS,
    logoAlt: "YAS logo",
    position: "Junior Software Engineer (Next.js & NestJS)",
    startDate: new Date(2024, 6),
    endDate: new Date(2025, 1),
    summary: [
      "Developed and maintained web applications using Next.js and NestJS.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Integrated front-end components with back-end services to create seamless user experiences.",
      "Utilized TypeScript for type-safe development and improved code quality.",
      "Worked with PostgreSQL for database management and optimized queries for performance.",
      "Implemented responsive UI designs using TailwindCSS and Material-UI.",
      "Conducted end-to-end testing with Cypress and unit testing to ensure application reliability.",
      "Participated in code reviews and contributed to maintaining high coding standards.",
      "Assisted in deploying applications to cloud platforms and managing CI/CD pipelines.",
    ],
  },
  {
    logo: FPTSoftware,
    logoAlt: "FPT logo",
    position: "Fresher .NET Developer",
    startDate: new Date(2023, 8),
    endDate: new Date(2023, 11),
    summary: [
      "Developed and maintained web applications using .NET Core.",
      "Collaborated with front-end developers to integrate user-facing elements with server-side logic.",
      "Participated in code reviews and contributed to improving coding standards.",
      "Assisted in the design and implementation of RESTful APIs.",
      "Performed unit testing and debugging to ensure high-quality code.",
      "Worked closely with senior developers to learn best practices and industry standards.",
      "Contributed to project documentation and technical specifications.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "COVID-19 & Pneumonia Detection System",
    description: "AI-driven healthcare solution for rapid screening and diagnosis of respiratory diseases using chest X-ray images. Achieved 95%+ accuracy with sub-second inference time. Multi-platform support (Web, Mobile, API) with microservices architecture.",
    url: "https://www.linkedin.com/in/hongquan0312/details/projects/?profileId=ACoAADljNNEBPzhdxM7xUaJwTyag5ElV03p2aSk",
    previewImage: CovidTest,
    technologies: ["Python", "Deep Learning", "CNN", ".NET Core", "Next.js", "React Native", "SQL Server", "Redis"],
  },
  {
    name: "AI-powered Signature Detection for Banking",
    description: "Deep Learning solution for signature verification in financial transactions. Features two AI models (Simple & Enhanced) for different use cases. Built with configurable AI Core Server ready for production deployment.",
    url: "https://www.linkedin.com/in/hongquan0312/details/projects/?profileId=ACoAADljNNEBPzhdxM7xUaJwTyag5ElV03p2aSk",
    previewImage: Signature,
    technologies: ["Python", "Deep Learning", "CNN", "Flask", "ASP.NET", "Next.js", "Docker", "Kubernetes"],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Project Director",
    testimonial:
      "Hong Quan is an exceptional Team Leader. His ability to balance technical excellence in backend systems with innovative AI solutions has been instrumental to our project success. He doesn't just lead; he empowers his team to grow.",
    title: "Project Director",
  },
  {
    personName: "Technical Architect",
    testimonial:
      "Working with Quan on AI-driven healthcare systems was a highlight. His deep understanding of CNN models and system optimization significantly improved our diagnostic accuracy and deployment speed. A true AI professional.",
    title: "Solution Architect",
  },
];
