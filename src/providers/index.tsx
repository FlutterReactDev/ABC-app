import { TooltipProvider } from "@/components/ui/tooltip";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </>
  );
};
