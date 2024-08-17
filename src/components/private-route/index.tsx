import { EXPIRES_AT, USER_ID } from "@/constants/user";
import { Navigate } from "@tanstack/react-router";
import { isBefore } from "date-fns";
import { FC, PropsWithChildren } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const userId = localStorage.getItem(USER_ID);
    const expiresAt = localStorage.getItem(EXPIRES_AT);
    console.log(expiresAt);
    
    if (userId && expiresAt && isBefore(new Date(), new Date(expiresAt))) {
        return <>{children}</>;
    }

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

    return <></>;
};
