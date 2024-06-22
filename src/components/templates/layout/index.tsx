import { Header } from "@/components/organisms/header";
import { Sidebar } from "@/components/organisms/sidebar";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, useState } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  return (
    <div className="h-dvh bg-[#F8FAFB]">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-[280px_minmax(0px,1fr)] h-full transition-all grid-rows-1",
          collapsed && "md:grid-cols-[74px_minmax(0px,1fr)]"
        )}
      >
        <Sidebar collapsed={collapsed} onToggle={onToggle} />
        <div className="h-full flex flex-col  ">
          <Header />
          <main className="p-8 h-full overflow-y-auto flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
};
