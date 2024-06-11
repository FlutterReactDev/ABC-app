import { Category2 } from "@/assets/icons";
import { Nav } from "./nav";
import { Logo } from "@/components/atoms/logo";

export const Sidebar = () => {
  return (
    <aside className="h-full w-full flex flex-col items-center bg-white border-l border">
      <div className="mt-6">
        <Logo />
      </div>

      <Nav
        links={[
          {
            title: "Справочник",
            icon: <Category2 />,
            to: "/a/directory",
          },
        ]}
      />
    </aside>
  );
};
