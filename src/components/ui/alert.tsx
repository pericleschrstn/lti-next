import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 dark:[&>svg]:text-gray-50",
  {
    variants: {
      variant: {
        success:
          "border-l-4 border-green-900 bg-success/25 text-green-900 dark:bg-green-950 dark:text-green-100 dark:border-green-100",
        danger:
          "border-l-4 border-danger bg-danger/25 text-danger dark:bg-red-950 [&>svg]:text-red-500 dark:text-red-100 dark:border-l-red-100 dark:[&>svg]:text-red-900",
        info: "border-l-4 border-sky-900 bg-info/25 text-sky-900 dark:bg-sky-950 dark:text-sky-100 dark:border-l-sky-100",
        warning:
          "border-l-4 border-yellow-900 bg-warning text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100 dark:border-l-yellow-100",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
