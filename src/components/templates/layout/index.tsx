import { Header } from "@/components/organisms/header";
import { Sidebar } from "@/components/organisms/sidebar";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-dvh bg-[#F8FAFB]">
      <div className="grid grid-cols-1 md:grid-cols-[185px_1fr] h-full">
        <Sidebar />
        <div className="h-full flex flex-col gap-3 overflow-y-auto">
          <Header />
          <main className="flex-1 md:py-5 md:px-12">{children}</main>
        </div>
      </div>
    </div>
  );
};
