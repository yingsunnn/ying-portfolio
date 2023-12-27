import { Button } from "@/config/site-config";
import { LucideProps, Mail } from "lucide-react";
import React from "react";

const IconButton = ({ button }: { button: Button }) => {
  function Icon({
    icon: Icon,
    size = 16,
  }: {
    icon: React.FC<LucideProps>;
    size: number;
  }) {
    return <Icon size={size} />;
  }

  const onClick = () => {
    if (button.url?.startsWith("mailto:")) {
      window.open(button.url, "_blank");
    }
  };

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="
      bg-neutral-600
      text-white
      hover:bg-neutral-500
      dark:bg-neutral-200
      dark:text-black
      dark:hover:bg-neutral-400
      rounded-md 
      p-1 
      text-center 
      inline-flex 
      items-center"
    >
      <Icon icon={button.icon ?? Mail} size={16} />
    </button>
  );
};

export default IconButton;
