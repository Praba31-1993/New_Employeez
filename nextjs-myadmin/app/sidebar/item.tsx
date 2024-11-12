"use client";
import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import SubMenuItem from "./sub-item";

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

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if the current item is active based on the pathname
  const isActive = pathname === path;

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-r-full hover:bg-sidebar-background cursor-pointer justify-between
        ${isActive ? 'bg-red-500 text-white' : 'hover:text-sidebar-active'}`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm font-semibold mb-0">{name}</p>
        </div>
        {items && items.length > 0 && <ChevronDown size={18} />}
      </div>
      {expanded && items && items.length > 0 && (
        <div className="flex flex-col space-y-1 ml-10">
          {items.map((submenuItem) => {
            // Check if the submenu item is active
            const isSubmenuActive = pathname === submenuItem.path;
            return (
              <SubMenuItem
                key={submenuItem.path}
                item={submenuItem}
                // Pass active state for submenu
                isActive={isSubmenuActive}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
