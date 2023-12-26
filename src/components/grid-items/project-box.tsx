import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Image from "next/image";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <Image
          priority
          loading="eager"
          alt="logo"
          src={item.icon ?? ""}
          width={600}
          height={50}
        />
      </div>
      <div className="m-6">
        <div className="text-xs dark:text-neutral-500 text-neutral-300">Indie Project</div>
        <div className="text-lg font-semibold line-clamp-1">{item.title}</div>
        <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-300 line-clamp-4">{item.description}</div>
      </div>
      
    </div>
  );
};

export default ProjectBox;
