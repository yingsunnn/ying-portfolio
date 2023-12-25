import { bentoBoxes } from "@/config/site-config";
import React from "react";
import Social from "./grid-items/social";
import GridItem from "./grid-items/grid-item";

const RightPanel = () => {
  return (
    <div
      // ref={scope}
      className="grid w-full grid-cols-4 gap-5 py-5 xl:px-1 xl:overflow-y-auto auto-rows-[76px]"
    >
      {bentoBoxes.map((item, index) => {
        return (
          <GridItem key={item.type + index} size={item.layout}>
            {item.type === "social" ? (
              <Social item={item} />
            ) : (
              <div>xfefwsef s</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightPanel;
