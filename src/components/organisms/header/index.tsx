import AvatarDropDown from "@/components/atoms/AvatarDropDown";

const user = {
  name: "Егор Соколов",
  avatarUrl:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  initials: "ЕС",
};

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-[40px] mt-3">
      <div className="w-96 h-6 bg-gray-300"></div>
      <div className="flex flex-row justify-between items-center gap-3">
        <AvatarDropDown user={user} />
      </div>
    </header>
  );
};
