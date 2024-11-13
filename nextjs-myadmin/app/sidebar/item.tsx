"use client";
import { useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import SubMenuItem from "./sub-item";
import './sidebar.css'

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const SidebarItem = ({ item, isExpanded }: { item: ISidebarItem; isExpanded: boolean }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === path;

  const onClick = () => {
    if (items && items.length > 0) {
      setExpanded(!expanded);
    } else {
      router.push(path);
    }
  };

  return (
    <div className="relative group">
      <div
        className={`flex items-center p-3 rounded-r-full cursor-pointer transition-all duration-300 ${
          isActive ? "bg-red-500 text-white" : "hover:bg-[#f3f3f3] hover:text-[#ff0000]"
        }`}
        onClick={onClick}
      >
        <Icon size={20} />
        {isExpanded && <p className="text-sm font-semibold ml-3">{name}</p>}
      </div>
      {!isExpanded && (
        <div className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md text-xs">
          {name}
        </div>
      )}
      {expanded && items && items.length > 0 && (
        <div className="flex flex-col ml-6 space-y-1">
          {items.map((submenuItem) => (
            <SubMenuItem key={submenuItem.path} item={submenuItem} isExpanded={isExpanded} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
