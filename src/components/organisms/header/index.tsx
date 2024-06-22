import { AvatarDropdown } from "@/components/atoms/avatar-dropdown";

const user = {
  name: "Егор Соколов",
  avatarUrl:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  initials: "ЕС",
  email: "denaeshev@gmail.com",
};

export const Header = () => {
  return (
    <header className="border-b bg-white flex items-center px-7 md:px-14 justify-end h-[60px] pointer-events-auto">
      <AvatarDropdown user={user} />
    </header>
  );
};
