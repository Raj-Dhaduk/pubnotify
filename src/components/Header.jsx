import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import ThemeToggle from "./theme/toggle";
import logo from "./../../public/logo.svg";
import { Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
      <img src={logo} alt="pubnotify logo" className="h-8" />
      <div className="flex items-center">
        <Button
          variant="outline"
          className="bg-[#2F4F4F] text-white hover:bg-green-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Create New Campaign
        </Button>
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
