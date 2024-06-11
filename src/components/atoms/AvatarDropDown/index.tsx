import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown"
import { useEffect, useRef, useState } from "react";


interface AvatarDropdownProps {
    user: {
        name: string;
        avatarUrl: string;
        initials: string;
    };
}

const AvatarDropDown = (props: AvatarDropdownProps) => {
    const { user } = props

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            handleMenuClose();
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={handleMenuToggle}
                    >
                        <div>{user.name}</div>
                        <Avatar>
                            <AvatarImage src={user.avatarUrl} alt="avatar" />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                {menuOpen && (
                    <DropdownMenuContent className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100" onClick={handleMenuClose}>
                            Профиль
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-t border-gray-200" />
                        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100" onClick={handleMenuClose}>
                            Выйти
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                )}
            </DropdownMenu>
        </div>
    )
}

export default AvatarDropDown;