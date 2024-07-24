import { SonnerComp } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReduxProvider>
            <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
            <SonnerComp />
        </ReduxProvider>
    );
};
