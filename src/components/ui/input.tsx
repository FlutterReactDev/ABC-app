import * as React from "react";

import { cn } from "@/lib/utils";
import { memo } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
      return (
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md text-base border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          autoFocus={false}
          {...props}
        />
      );
    }
  )
);
Input.displayName = "Input";

export { Input };
