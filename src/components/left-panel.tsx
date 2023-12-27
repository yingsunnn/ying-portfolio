import React from "react";
import Image from "next/image";
import { profileConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between xl:max-w-sm py-6 xl:py-10"
    >
      <div>
        {/* Image container */}
        <div>
          <Image
            priority
            className="rounded-xl"
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/avatar.JPG"
            width={200}
            height={200}
            blurDataURL="/avatar.JPG"
          />
        </div>

        {/* Text Container */}
        <div className="mt-6">
          <div className="text-xl font-medium text-primary">
            {profileConfig.title}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{profileConfig.name}</h1>
          <p className="text-2xl font-light text-neutral-500">
            {profileConfig.bio}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex flex-row items-center gap-2">
            <MapPin size="14" />
            {profileConfig.location}
          </div>

          <ThemeToggle />
        </div>
        {/* Footer */}
        {/* <div className="hidden mt-6 xl:flex">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default LeftPanel;
