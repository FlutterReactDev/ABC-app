import { AvatarDropdown } from "@/components/atoms/avatar-dropdown";
import { Logo } from "@/components/atoms/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Settings } from "lucide-react";
import { Nav } from "../sidebar/nav";
import { Category1, Category2 } from "@/assets/icons";

const user = {
  name: "Егор Соколов",
  avatarUrl:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  initials: "ЕС",
  email: "denaeshev@gmail.com",
};

export const Header = () => {
  return (
    <header className="border-b bg-white flex items-center px-5 gap-4 md:px-14 justify-end h-[60px] pointer-events-auto">
      <AvatarDropdown user={user} />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="lg:hidden inline-flex"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="sm:max-w-full max-w-full w-full overflow-y-auto"
        >
          <SheetHeader>
            <div className="h-max w-full">
              <Logo />
            </div>
          </SheetHeader>
          <Nav
            collapsed={false}
            links={[
              {
                title: "Справочник",
                icon: (props) => (
                  <Category2 className="w-5 h-5" color={props.color} />
                ),
                to: "/a/directory",
              },
              {
                title: "Подбор ЖК",
                icon: (props) => (
                  <Category1 className="w-5 h-5" color={props.color} />
                ),
                to: "/a/selection",
              },
              {
                title: "Настройки",
                icon: (props) => (
                  <Settings className="w-5 h-5" color={props.color} />
                ),
                to: "/a/settings",
              },
            ]}
          />
        </SheetContent>
      </Sheet>
    </header>
  );
};
