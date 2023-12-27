import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid rounded-xl bg-white dark:bg-neutral-800 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 p-6",
        "2x1": "md:col-span-2 col-span-full row-span-1 p-6",
        "2x2": "md:col-span-2 col-span-full row-span-2 p-6",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
        "2x6":
          "md:col-span-2 col-span-full row-span-6 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
      }}
      className={cn(
        variants({
          size,
          className:
            "hover:dark:bg-neutral-700 hover:bg-neutral-50 duration-75 transition-colors ease-in-out",
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
