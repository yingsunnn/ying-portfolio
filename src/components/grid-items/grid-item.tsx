import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const variants = cva(
  "shadow-grid rounded-2xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 p-6",
        "2x1": "md:col-span-2 col-span-full row-span-1 p-6",
        "2x2": "md:col-span-2 col-span-full row-span-2 p-6 ",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
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
    <div
      className={cn(
        variants({
          size,
          className:
            "hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out",
        })
      )}
    >
      {children}
    </div>
  );
};

export default GridItem;
