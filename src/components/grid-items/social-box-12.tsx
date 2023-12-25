import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { LucideProps, Mail } from "lucide-react";

const SocialBox12 = ({ item }: { item: GridItemInterface }) => {
  function Icon({
    icon: Icon,
    size = 16,
  }: {
    icon: React.FC<LucideProps>;
    size: number;
  }) {
    return <Icon size={size} />;
  }

  return (
    <div>
      <div className="flex flex-row items-center gap-5">
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
        <button
          type="button"
          className={cn(
            "focus:ring-1 focus:outline-none rounded-md p-1 text-center inline-flex items-center",
            item.button?.buttonColor
          )}
        >
          <Icon icon={item.button?.buttonIcon ?? Mail} size={16} />
          <span className="sr-only">Send Email</span>
        </button>
      </div>
    </div>
  );
};

export default SocialBox12;
