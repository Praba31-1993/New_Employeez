"use client";
import logo from "../assets/img/107.png";
import Image from "next/image";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import SidebarItem from "./item";
import "./sidebar.css";

interface ISidebarItem {
  name: string;
  path: string;
  icon: any;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
  icon: any;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Timesheet",
    path: "/timesheet",
    icon: BadgeDollarSign,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      { name: "General", path: "/settings/general", icon: BadgeDollarSign },
      { name: "Security", path: "/settings/security", icon: LayoutDashboard },
      { name: "Notifications", path: "/settings/notifications", icon: BadgeDollarSign },
    ],
  },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLocked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Toggle Sidebar Expand" } };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-10 transition-width duration-300 
      ${isExpanded || isLocked ? "w-48" : "w-20 hover:w-48"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isLocked && setIsExpanded(false)}
    >
      <div className="flex flex-col items-center w-full pt-6 space-y-6">
        <div className="flex justify-between items-center w-full px-4">
          <Image src={logo} alt="Logo" width={isExpanded || isLocked ? 30 : 20} height={isExpanded || isLocked ? 30 : 20} />
          {(isExpanded || isLocked) && (
            <Checkbox
              {...label}
              className="mt-3"
              checked={isLocked}
              onChange={handleCheckboxChange}
              icon={<RadioButtonUncheckedIcon sx={{ color: "red" }} />}
              checkedIcon={<RadioButtonCheckedIcon sx={{ color: "red" }} />}
            />
          )}
        </div>

        <div className="w-full flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} isExpanded={isExpanded || isLocked} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
