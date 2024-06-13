import { AvatarDropdown } from "@/components/atoms/avatar-dropdown";

const user = {
  name: "Егор Соколов",
  avatarUrl:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  initials: "ЕС",
};

export const Header = () => {
  return (
    <header className="flex flex-row justify-end items-center w-full h-[40px] mt-3 px-12">
      <AvatarDropdown user={user} />
    </header>
  );
};
