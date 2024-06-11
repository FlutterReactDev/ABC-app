import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

import { FC, ReactNode } from "react";

interface NavProps {
  links: {
    title: string;
    icon: ReactNode;
    to: string;
  }[];
}

export const Nav: FC<NavProps> = (props) => {
  const { links } = props;
  return (
    <div className="group flex flex-col gap-4 py-2 h-full w-full mt-10">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <Link key={index} to={link.to} className="w-full">
            {({ isActive }) => {
              return (
                <div
                  className={cn(
                    "w-full flex items-center text-base font-medium gap-2.5 p-2.5",
                    isActive && "text-white bg-primary"
                  )}
                >
                  {link.icon}
                  {link.title}
                </div>
              );
            }}
          </Link>
        ))}
      </nav>
    </div>
  );
};
