
import React from 'react';
import { Bell, Search, Wifi, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  className?: string;
  sidebarCollapsed?: boolean;
  online?: boolean;
}

const Header = ({ className, sidebarCollapsed = false, online = true }: HeaderProps) => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 2 new parent messages",
    });
  };
  
  const handleConnectionToggle = () => {
    toast({
      title: online ? "Going offline" : "Back online",
      description: online ? "App will work in offline mode" : "Connected to network",
      variant: online ? "destructive" : "default",
    });
  };
  
  return (
    <div className={cn(
      "flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-10",
      className
    )}>
      <div className="flex items-center md:ml-4">
        <div className="relative mr-2 md:hidden">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-ss-blue-600 text-xl">शिक्षा</span>
            <span className="font-semibold text-gray-800 text-xl">साथी</span>
          </div>
        </div>
        <h1 className="text-lg font-medium text-gray-800 mt-1 hidden md:block">Class Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="border border-gray-200 rounded-full p-1 flex items-center space-x-1 cursor-pointer" onClick={handleConnectionToggle}>
          {online ? (
            <>
              <Wifi size={16} className="text-ss-green-500" />
              <span className="text-xs text-gray-600 mr-1">Online</span>
            </>
          ) : (
            <>
              <WifiOff size={16} className="text-ss-red-500" />
              <span className="text-xs text-gray-600 mr-1">Offline</span>
            </>
          )}
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded-full relative" onClick={handleNotificationClick}>
          <Bell size={18} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-ss-red-500 rounded-full"></span>
        </button>
        
        <div className="h-8 w-8 bg-ss-blue-100 rounded-full flex items-center justify-center">
          <span className="text-ss-blue-700 text-sm font-medium">TK</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
