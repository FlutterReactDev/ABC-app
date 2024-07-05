import { SonnerComp } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      <SonnerComp />
    </>
  );
};
