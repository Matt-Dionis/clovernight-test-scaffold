'use client';

import { Grid3x3, Bell, MapPin, Minimize2, Moon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function DashboardHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 mb-6">
      {/* Left Section - Icons */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white"
          aria-label="Dashboard menu"
        >
          <Grid3x3 className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#1e1e1e] hover:bg-[#2a2a2a] text-white"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-2 text-white">
          <MapPin className="w-5 h-5" />
          <span className="text-sm font-normal">Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md relative">
        <Input
          type="text"
          placeholder="Search City"
          className="bg-[#1e1e1e] border-none text-white placeholder:text-[#ededed] h-12 pr-12 rounded-xl"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-transparent"
          aria-label="Minimize search"
        >
          <Minimize2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Right Section - Dark Mode & Profile */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#19191b] rounded-3xl px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-[#d8e9f9] flex items-center justify-center">
            <Moon className="w-5 h-5 text-[#1e1e1e]" />
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
      </div>
    </header>
  );
}
