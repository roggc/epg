"use client";

import { House } from "lucide-react";
import { MonitorPlay } from "lucide-react";
import { Menu } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Bookmark } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <House className="w-8 h-8 mr-2" />
        <MonitorPlay className="w-8 h-8 mr-2" />
        <Menu className="w-8 h-8 mr-2" />
        <RotateCcw className="w-8 h-8 mr-2" />
        <Bookmark className="w-8 h-8 mr-2" />
      </div>
    </footer>
  );
}
