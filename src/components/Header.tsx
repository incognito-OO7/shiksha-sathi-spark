
import React from 'react';
import { Bell, User, Search, Wifi, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  online?: boolean;
}

const Header = ({ className, online = true }: HeaderProps) => {
  return (
    <header className={cn(
      "bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between sticky top-0 z-10",
      className
    )}>
      <div className="hidden md:flex items-center space-x-3">
        {/* Partner logos */}
        <div className="flex items-center space-x-4">
          <div className="text-sm font-semibold text-gray-800">THE/NUDGE INSTITUTE</div>
          <span className="text-gray-300">|</span>
          <div className="font-bold text-[#0066ff]">Meta</div>
          <span className="text-gray-300 hidden lg:inline">|</span>
          <div className="hidden lg:block font-bold text-[#1745ce]">H2S</div>
        </div>
      </div>
      
      <div className="relative flex-1 max-w-md mx-auto md:mx-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-ss-blue-500 focus:border-ss-blue-500 bg-gray-50"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {online ? (
            <Wifi size={18} className="text-ss-green-500" />
          ) : (
            <WifiOff size={18} className="text-ss-red-500" />
          )}
          <span className="ml-1 text-xs font-medium hidden sm:inline">
            {online ? 'Online' : 'Offline'}
          </span>
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
        
        <div className="h-8 w-8 bg-ss-blue-100 rounded-full flex items-center justify-center">
          <User size={18} className="text-ss-blue-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
