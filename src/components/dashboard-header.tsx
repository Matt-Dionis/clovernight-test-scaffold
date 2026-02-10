"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Grid3x3, MapPin, Moon, Search, User } from "lucide-react";

interface DashboardHeaderProps {
  location: {
    city: string;
    country: string;
  };
}

export function DashboardHeader({ location }: DashboardHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 mb-6">
      {/* Left Icons */}
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2f] w-[50px] h-[50px]"
          aria-label="Dashboard menu"
        >
          <Grid3x3 className="w-6 h-6 text-[#fefefe]" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2f] w-[50px] h-[50px]"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-[#fefefe]" />
        </Button>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <MapPin className="w-6 h-6 text-[#fefefe]" />
        <span className="text-[#fefefe] text-base">
          {location.city},{location.country}
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <Input
          type="text"
          placeholder="Search City"
          className="bg-[#1e1e1e] border-none rounded-[10px] text-[#ededed] placeholder:text-[#ededed] h-[46px] pr-12"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-[#fefefe]" />
        </Button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-[#19191b] rounded-[20px] h-[46px] px-4 gap-3">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-[#d8e9f9] hover:bg-[#c5d9ec] w-10 h-10"
            aria-label="Toggle dark mode"
          >
            <Moon className="w-5 h-5 text-[#1e1e1e]" />
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-[#d8e9f9] hover:bg-[#c5d9ec] w-10 h-10"
          aria-label="User profile"
        >
          <User className="w-5 h-5 text-[#1e1e1e]" />
        </Button>
      </div>
    </header>
  );
}
