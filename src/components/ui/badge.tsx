import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-gray-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-info text-gray-800 dark:bg-sky-950 dark:text-white",
        secondary: "border-transparent bg-secondary text-white dark:bg-gray-800 dark:text-gray-50",
        danger: "border-transparent bg-danger text-white dark:bg-red-950 dark:text-white",
        outline: "text-gray-900 dark:text-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
