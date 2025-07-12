import { url } from "inspector";

export interface Link {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  folderTitle: string;
  name: string;
  type: string;
  techstack: string;
  description: string;
  links: Link[];
  photoPaths: string[];
}

export let projects: Project[] = [
  {
    id: "kaori-ai",
    folderTitle: "かおり AI",
    name: "かおり AI",
    type: "Web",
    techstack: "NextJS, Groq, TailwindCSS",
    description:
      "Kaori AI is an AI Assistant project created by Kaori Athaya Hazza, developed using Next.js and Groq API. This assistant is designed to provide an interactive text-based experience, with a modular architecture that makes it easy to add new features in the future..",
    links: [
      {
        title: "Demo",
        url: "https://kaori-ai.vercel.app/",
      },
    ],
    photoPaths: [
      "/assets/image/kaoriai/1.png",
      "/assets/image/kaoriai/2.png",
    ],
  },
  {
    id: "kaoriathaya-dev",
    folderTitle: "kaoriathaya.dev",
    name: "kaoriathaya.dev",
    type: "Web",
    techstack: "NextJS, TailwindCSS",
    description:
      "kaoriathaya.dev — A personal website built with Next.js, showcasing projects, skills, and achievements.",
    links: [
      {
        title: "Demo",
        url: "https://kaoriathaya.vercel.app/",
      },
    ],
    photoPaths: [
      "/assets/image/kaoridev/1.png",
      "/assets/image/kaoridev/2.png",
    ],
  },
  {
    id: "kaori-kanban",
    folderTitle: "かおり kanban",
    name: "かおり kanban",
    type: "Web",
    techstack: "NextJS, groq, TailwindCSS",
    description:
      "かおり kanban-A simple task management app to visualize project progress using Kanban boards.",
    links: [
      {
        title: "Demo",
        url: "https://kaori-kanban.vercel.app/",
      },
    ],
    photoPaths: [
      "/assets/image/kanban/1.png",
      "/assets/image/kanban/2.png",
    ],
  },
  {
    id: "skillflug",
    folderTitle: "skillflug",
    name: "skillflug",
    type: "Web",
    techstack: "NextJS, groq, TailwindCSS",
    description:
      "Skillflug — An AI Assistant built with Next.js and Groq API Vision, featuring high school materials, interactive exercises, and a reward system with Pokémon collections to motivate learning.",
    links: [
      {
        title: "Demo",
        url: "https://skillflug.vercel.app/",
      },
    ],
    photoPaths: [
      "/assets/image/skillflug/1.png",
      "/assets/image/skillflug/2.png",
    ],
  },
  {
    id: "date-request",
    folderTitle: "date request",
    name: "Date request",
    type: "Web",
    techstack: "HTML, CSS, JS",
    description:
      "Date Request — An interactive page with playful Yes and No buttons, where the No button always escapes, leaving you no choice but to say Yes to a date.",
    links: [
      {
        title: "Demo",
        url: "https://date-request-kaori.vercel.app/",
      },
    ],
    photoPaths: [
      "/assets/image/daterequest/1.png",
      "/assets/image/daterequest/2.png",
    ],
  },
];
