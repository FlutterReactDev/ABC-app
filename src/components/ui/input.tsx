import * as React from "react";

import { cn } from "@/lib/utils";
import { memo } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
      return (
        <div className="relative">
          {startAdornment && (
            <div className="absolute left-1 translate-y-[-50%] top-[50%] text-foreground/50">
              {startAdornment}
            </div>
          )}

          <input
            type={type}
            className={cn(
              "flex h-11 w-full text-foreground rounded border border-input  px-3 py-3 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              startAdornment && "pl-8",
              endAdornment && "pr-8",
              className
            )}
            ref={ref}
            {...props}
          />
          {endAdornment && (
            <div className="absolute right-2 translate-y-[-50%] top-[50%] text-foreground/50">
              {endAdornment}
            </div>
          )}
        </div>
      );
    }
  )
);
Input.displayName = "Input";

export { Input };
