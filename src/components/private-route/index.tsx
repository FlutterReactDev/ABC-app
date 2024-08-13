import { useGetProfileQuery } from "@/api/User";
import { FC, PropsWithChildren } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const { data } = useGetProfileQuery(4444778900);

    return <>{children}</>;
};
