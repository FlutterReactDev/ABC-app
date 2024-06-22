import { Category1, Category2 } from "@/assets/icons";
import { Logo } from "@/components/atoms/logo";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { FC } from "react";
import { Nav } from "./nav";
interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}
export const Sidebar: FC<SidebarProps> = (props) => {
  const { collapsed, onToggle } = props;
  return (
    <aside className="h-full w-full flex-col items-start px-4 bg-white border-l border hidden md:flex">
      <div className="mt-6 flex gap-2 items-center justify-between w-full">
        {!collapsed && <Logo />}

        <Button variant={"ghost"} size={"icon"} onClick={onToggle}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <div className="mt-10 w-full">
        <Nav
          collapsed={collapsed}
          links={[
            {
              title: "Справочник",
              icon: (props) => <Category2 className="w-5 h-5" color={props.color} />,
              to: "/a/directory",
            },
            {
              title: "Подбор ЖК",
              icon: (props) => <Category1 className="w-5 h-5" color={props.color} />,
              to: "/a/selection",
            },
            {
              title: "Настройки",
              icon: (props) => <Settings className="w-5 h-5" color={props.color} />,
              to: "/a/settings",
            },
          ]}
        />
      </div>
    </aside>
  );
};
