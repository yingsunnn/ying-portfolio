"use client";

import { bentoBoxes } from "@/config/site-config";
import React, { useEffect } from "react";
import GridItem from "./grid-items/grid-item";
import ProfileBox from "./grid-items/profile-box";
import SocialBox12 from "./grid-items/social-box-12";
import SocialBox21 from "./grid-items/social-box-21";
import SkillsBox from "./grid-items/skills-box";
import ProjectBox from "./grid-items/project-box";
import { useAnimate, stagger } from "framer-motion";

const staggerDelay = stagger(0.01);

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.15,
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerDelay,
        }
      );
    }
  }, [scope]);

  return (
    <div
      ref={scope}
      className="grid w-full grid-cols-4 gap-5 py-5 xl:px-1 auto-rows-[76px]"
    >
      {bentoBoxes.map((item, index) => {
        return (
          <GridItem key={item.type + index} size={item.layout}>
            {item.type === "profile" ? (
              <ProfileBox item={item} />
            ) : item.type === "social12" ? (
              <SocialBox12 item={item} />
            ) : item.type === "social21" ? (
              <SocialBox21 item={item} />
            ) : item.type === "skills" ? (
              <SkillsBox item={item} />
            ) : item.type === "project" ? (
              <ProjectBox item={item} />
            ) : (
              <div>Unknown item</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightPanel;
