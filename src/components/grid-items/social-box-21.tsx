"use client";

import { GridItemInterface } from "@/config/site-config";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../button";

const SocialBox21 = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex flex-row gap-3 lg:gap-5">
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
        <div>
          <div className="text-lg font-semibold line-clamp-1">{item.title}</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-300">
            {item.social?.socialId}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-3 justify-end">
          {item.social?.connections && (
            <div className="text-sm text-neutral-500 dark:text-neutral-300">
              Connections:{" "}
              <span className="font-semibold">{item.social?.connections}</span>
            </div>
          )}

          {item.social?.followers && (
            <div className="text-sm text-neutral-500 dark:text-neutral-300">
              Followers:{" "}
              <span className="font-semibold">{item.social?.followers}</span>
            </div>
          )}

          {item.social?.following && (
            <div className="text-sm text-neutral-500 dark:text-neutral-300">
              Following:{" "}
              <span className="font-semibold">{item.social?.following}</span>
            </div>
          )}
        </div>
        <div className="w-full mt-2 text-right">
          <Button button={item.button ?? {}} />
        </div>
      </div>
    </div>
  );
};

export default SocialBox21;
