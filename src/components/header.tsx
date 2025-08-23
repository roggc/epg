"use client";

import { UserRound } from "lucide-react";
import { Search } from "lucide-react";
import nmLogo from "@/assets/nm-logo.png";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <UserRound className="w-8 h-8 mr-2" />
        <img src={nmLogo} alt="Logo" className="w-8 h-8 mr-2" />
        <Search className="w-8 h-8 mr-2" />
      </div>
    </header>
  );
}
