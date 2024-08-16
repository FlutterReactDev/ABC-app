import { USER_ID } from "@/constants/user";
import { Navigate } from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const userId = localStorage.getItem(USER_ID);

    if (!userId) {
        return (
            <Navigate
                to="/login"
                search={{
                    from: location.pathname,
                }}
                from={location.pathname}
            />
        );
    }

    return <>{children}</>;
};
