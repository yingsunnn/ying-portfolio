"use client";

import { Button } from "@/config/site-config";
import React from "react";

const Button = ({ button }: { button: Button }) => {
  const openInNewTab = () => {
    window.open(button.url, "_blank");
  };

  return (
    <button
      role="link"
      onClick={() => openInNewTab()}
      className="
    text-xs 
    rounded-md 
    px-3.5 
    py-0.5
    bg-neutral-700
    text-white
    hover:bg-neutral-500
    dark:bg-neutral-200
    dark:text-black
    dark:hover:bg-neutral-400"
    >
      {button.text}
    </button>
  );
};

export default Button;
