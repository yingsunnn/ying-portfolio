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

        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${profileConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <MapPin size="14" />
            {profileConfig.location}
          </a>
          <a
            href={`mailto:${profileConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact Me
          </a>
          <ThemeToggle />
        </div>
        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
