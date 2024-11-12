"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";

interface ISubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path, icon: Icon } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer ${
        isActive ? "text-sidebar-active font-semibold" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2 px-2">
        <Icon size={20} />
        <p className="text-sm font-semibold mb-0">{name} </p>
      </div>
    </div>
  );
};

export default SubMenuItem;
