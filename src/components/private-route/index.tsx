import { useGetProfileQuery } from "@/api/User";
import { Navigate } from "@tanstack/react-router";
import { FC, PropsWithChildren, useEffect } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const { isSuccess, isError, data, error } = useGetProfileQuery(4444778900);
    console.log(error);

    if (isSuccess) {
        return <>{children}</>;
    }

    if (isError) {
        return <Navigate to="/login" />;
    }

    return <></>;
};
