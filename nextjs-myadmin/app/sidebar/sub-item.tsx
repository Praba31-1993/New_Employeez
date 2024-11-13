"use client";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import './sidebar.css'

interface ISubMenuItem {
  item: {
    name: string;
    path: string;
    icon: LucideIcon;
  };
  isExpanded: boolean;
}

const SubMenuItem = ({ item, isExpanded }: ISubMenuItem) => {
  const router = useRouter();
  const { name, path, icon: Icon } = item;

  const onClick = () => {
    router.push(path);
  };

  return (
    <div
      className={`flex items-center p-3 rounded-r-full cursor-pointer hover:bg-[#f3f3f3] ${
        isExpanded ? "text-white" : "hover:text-[#ff0000]"
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      {isExpanded && <p className="text-sm font-semibold ml-3">{name}</p>}
    </div>
  );
};

export default SubMenuItem;
