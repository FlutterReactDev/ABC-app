import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

interface AvatarDropdownProps {
  user: {
    name: string;
    avatarUrl: string;
    initials: string;
  };
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { user } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-full items-center gap-3 p-1 rounded-md cursor-pointer transition-colors">
          <div className="flex flex-col ">
            <div className="text-sm">{user.name}</div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <User />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
