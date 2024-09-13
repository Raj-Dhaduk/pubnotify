import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar";
import {
  Home,
  Bell,
  BarChart2,
  Settings,
  Globe,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Bell, label: "Send Notification", path: "/notifications" },
  { icon: BarChart2, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Integration", path: "/integration" },
  { icon: Globe, label: "Domain", path: "/domain" },
  { icon: Users, label: "Users", path: "/users" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const Navigate = useNavigate();

  const handleNavigation = (path) => {
    Navigate(path); // Navigate to the path
  };

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-[#1e3a3a] text-white transition-all duration-300",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center h-16 mb-4 p-4 ">
        <Avatar className="h-10 w-10 ">
          <AvatarImage
            src="/placeholder.svg?height=40&width=40"
            alt="User"
            className="  "
          />
          <AvatarFallback
            className="bg-white dark:bg-gray-800 text-black dark:text-white
          "
          >
            U
          </AvatarFallback>
        </Avatar>
        {expanded && <span className="ml-2 font-semibold  ">User</span>}
      </div>

      <nav className="flex-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={cn(
              "w-full justify-start text-white hover:bg-[#2a4f4f] hover:text-white p-1.5 m-1",
              !expanded && "justify-center"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="h-5 w-5" />
            {expanded && <span className="ml-2">{item.label}</span>}
          </Button>
        ))}
      </nav>

      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:bg-[#2a4f4f] hover:text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronLeft className="h-5 w-5" />
              <span className="ml-2">Collapse</span>
            </>
          ) : (
            <>
              <ChevronRight className="h-5 w-5  " />
              <span className="">ex</span>
            </>
          )}
        </Button>
      </div>

      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-white hover:bg-[#2a4f4f] hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          {expanded && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  );
}
