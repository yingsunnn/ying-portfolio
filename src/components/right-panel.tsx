import { bentoBoxes } from "@/config/site-config";
import React from "react";
import GridItem from "./grid-items/grid-item";
import ProfileBox from "./grid-items/profile-box";
import SocialBox12 from "./grid-items/social-box-12";
import SocialBox21 from "./grid-items/social-box-21";
import SkillsBox from "./grid-items/skills-box";

const RightPanel = () => {
  return (
    <div
      // ref={scope}
      className="grid w-full grid-cols-4 gap-5 py-5 xl:px-1 xl:overflow-y-auto auto-rows-[76px]"
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
