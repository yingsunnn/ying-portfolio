import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Image from "next/image";

const ProfileBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="text-lg font-semibold line-clamp-1">{item.title}</div>
      </div>
      <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-300 line-clamp-4">
        {item.description}
      </div>
    </div>
  );
};

export default ProfileBox;
