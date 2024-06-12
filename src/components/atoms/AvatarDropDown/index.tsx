import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AvatarDropdownProps {
  user: {
    name: string;
    avatarUrl: string;
    initials: string;
  };
}

const AvatarDropDown = (props: AvatarDropdownProps) => {
  const { user } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <div>{user.name}</div>
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt="avatar" />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
