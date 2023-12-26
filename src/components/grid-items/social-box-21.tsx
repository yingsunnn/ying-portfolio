"use client"

import { GridItemInterface } from "@/config/site-config";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

const SocialBox21 = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex flex-row gap-5">
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
        <div className="text-right">
          {item.social?.connections && (
            <div className="text-sm text-neutral-500 dark:text-neutral-300">
              Connections:{" "}
              <span className="font-semibold">{item.social?.connections}</span>
            </div>
          )}
          {item.social?.followers && (
            <div className="flex flex-row gap-3 ">
              <div className="text-sm text-neutral-500 dark:text-neutral-300">
                Followers:{" "}
                <span className="font-semibold">{item.social?.followers}</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-300">
                Following:{" "}
                <span className="font-semibold">{item.social?.following}</span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full text-right">
          <button
            type="button"
            className={`
              mt-2 
              focus:ring-1 
              focus:outline-none 
              font-medium 
              rounded-lg 
              text-sm
              px-2 
              py-1 
              text-center 
              inline-flex 
              items-center`}
          >
            {item.button?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialBox21;
