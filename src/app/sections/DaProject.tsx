"use client";
import Image from "next/image";
import { useState } from "react";
import FolderComponent from "../components/FolderComponent";
import { projects } from "../data/projects";

export default function DaProject() {
  const [isOpen, setIsOpen] = useState<string>("");

  const handleOpen = (which: string) => {
    setIsOpen((prev) => (prev === which ? "" : which));
  };

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-2 place-items-center xl:place-items-end">
        {projects.map((project) => (
          <FolderComponent
            key={project.id}
            index={projects.indexOf(project)}
            isOpen={isOpen}
            handleOpen={handleOpen}
            toOpen={project.id}
            title={project.folderTitle}
            project={project}
          />
        ))}
      </div>

      <Image
        src="/assets/image/stripe_mac_retro_flip.png"
        alt="stripe_mac"
        width={700}
        height={700}
        className="select-none pointer-events-none w-screen h-36 -translate-y-3 lg:h-48"
        priority
      />
    </div>
  );
}
