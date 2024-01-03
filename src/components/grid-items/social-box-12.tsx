import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { LucideProps, Mail } from "lucide-react";
import IconButton from "../icon-button";

const SocialBox12 = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      <div className="flex flex-row items-center lg:gap-5 gap-2">
        <div>
          <Image
            priority
            loading="eager"
            alt="logo"
            src={item.icon ?? ""}
            width={50}
            height={50}
          />
        </div>
        <div className="text-lg font-semibold line-clamp-1">{item.title}</div>
      </div>
      <div className="mt-5 flex flex-row items-center justify-between">
        <div className="text-sm text-neutral-500 dark:text-neutral-300">
          {item.social?.socialId}
        </div>
      </div>
      <div className="mt-3">
        <IconButton button={item.button ?? {}} />
      </div>
    </div>
  );
};

export default SocialBox12;
