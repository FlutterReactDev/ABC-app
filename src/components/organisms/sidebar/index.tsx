import { Category1, Category2 } from "@/assets/icons";
import { Nav } from "./nav";
import { Logo } from "@/components/atoms/logo";

export const Sidebar = () => {
  return (
    <aside className="h-full w-full flex flex-col items-center bg-white border-l border">
      <div className="mt-6">
        <Logo />
      </div>

      <div className="mt-10">
        <Nav
          links={[
            {
              title: "Справочник",
              icon: (props) => <Category2 color={props.color}/>,
              to: "/a/directory",
            },
          ]}
        />

        <Nav
          links={[
            {
              title: "Подбор ЖК",
              icon: (props) => <Category1 color={props.color} />,
              to: "/a/selection",
            },
          ]}
        />
      </div>


    </aside>
  );
};
