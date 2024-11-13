"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link";
import "./sidebar.css";
import EZlogo from "../assets/img/employeeslogo.svg";
import logo from "../assets/img/107.png";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import dashboardWhite from "../assets/img/dashboard-white.svg";
import dashboardGrey from "../assets/img/dashboard-grey.svg";
import timesheetGrey from "../assets/img/timesheet_grey.svg";
import timesheetWhite from "../assets/img/timesheet_white.svg";

interface SidebarProps {
  children: ReactNode;
}

interface ISidebarItem {
  name: string;
  path: string;
  icon: any;
  inactive: any;
}

const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const pathname = usePathname(); // Get the current path with usePathname

  // Initialize sidebar state based on localStorage value
  useEffect(() => {
    const pinned = localStorage.getItem("pinned");
    if (pinned === "true") {
      setIsOpen(true);
      setIsChecked(true);
    }
  }, []);

  // Handle checkbox change and localStorage update
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    localStorage.setItem("pinned", checked.toString());
    setIsOpen(checked); // Set sidebar open directly if pinned
  };

  const menuItem: ISidebarItem[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: dashboardWhite,
      inactive: dashboardGrey,
    },
    {
      name: "Timesheet",
      path: "/timesheet",
      icon: timesheetWhite,
      inactive: timesheetGrey,
    },
  ];

  // Sidebar open/close hover control only if not pinned
  const handleMouseEnter = () => {
    if (!isChecked) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isChecked) setIsOpen(false);
  };

  return (
    <div className="sidebarContainer">
      <div
        style={{
          width: isOpen ? "300px" : "80px",
          transition: "none", // No transition on initial load
        }}
        className="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="top_section">
          <div
            className="bars"
            style={{
              display: "flex",
              justifyContent: isOpen ? "space-between" : "center",
            }}
          >
            {isOpen ? (
              <Image src={logo} alt="Logo" />
            ) : (
              <Image src={EZlogo} alt="Logo" style={{ margin: "0 auto" }} />
            )}

            {isOpen && (
              <div className="pinIcon">
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  icon={<RadioButtonUncheckedIcon sx={{ color: "red" }} />}
                  checkedIcon={<RadioButtonCheckedIcon sx={{ color: "red" }} />}
                />
              </div>
            )}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`link ${pathname === item.path ? "active" : ""}`} // Add active class if path matches
            style={{
              display: "flex",
              justifyContent: isOpen ? "flex-start" : "center",
              alignItems: "center",
            }}
          >
            {/* Conditionally render active or inactive icon */}
            <Image
              src={pathname === item.path ? item.icon : item.inactive}
              alt={`${item.name} Icon`}
            />
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="menuTextStyle"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
