"use client";
import logo from "../assets/img/107.png";
import Image from "next/image";
import React, { use, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import SidebarItem from "./item";

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
  // {
  //   name: "Payment",
  //   path: "/payment",
  //   icon: WalletCards,
  // },
  // {
  //   name: "Accounts",
  //   path: "/accounts",
  //   icon: CircleUserRound,
  // },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings/general",
        icon: BadgeDollarSign,
      },
      {
        name: "Security",
        path: "/settings/security",
        icon: LayoutDashboard,
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
        icon: BadgeDollarSign,
      },
    ],
  },
];

const Sidebar = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex ">
          <Image src={logo} alt={""} />
          <Checkbox
            {...label}
            className="mt-3"
            checked={checked}
            onChange={handleChange}
            icon={
              <RadioButtonCheckedIcon
                sx={{ color: "red" }}
              />
            }
            checkedIcon={
              <RadioButtonUncheckedIcon
                sx={{ color:"red" }}
              />
            }
          />
        </div>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
