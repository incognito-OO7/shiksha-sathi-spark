
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Headphones, 
  MessageSquare, 
  Settings, 
  Menu, 
  ArrowLeft
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const SidebarItem = ({ icon: Icon, label, active = false, badge = 0 }) => (
    <div 
      className={cn(
        "flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors",
        active ? "bg-ss-blue-100 text-ss-blue-700" : "hover:bg-gray-100"
      )}
    >
      <div className="relative">
        <Icon size={20} className={active ? "text-ss-blue-600" : "text-gray-600"} />
        {badge > 0 && (
          <span className="icon-badge bg-ss-red-500">
            {badge}
          </span>
        )}
      </div>
      {(!collapsed || (isMobile && mobileMenuOpen)) && (
        <span className={active ? "font-medium" : ""}>
          {label}
        </span>
      )}
    </div>
  );
  
  // Sidebar for desktop 
  const desktopSidebar = (
    <div 
      className={cn(
        "hidden md:flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-between p-4 border-b border-gray-100",
        collapsed && "justify-center"
      )}>
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <span className="font-bold text-ss-blue-600 text-xl">शिक्षा</span>
            <span className="font-semibold text-gray-800 text-xl">साथी</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 rounded">
          <ArrowLeft size={18} className={cn("transform transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>
      
      <div className="flex flex-col space-y-1 p-2 mt-2">
        <SidebarItem icon={BookOpen} label="Class Dashboard" active={true} />
        <SidebarItem icon={BarChart3} label="Assessment" />
        <SidebarItem icon={Headphones} label="Record Class" />
        <SidebarItem icon={MessageSquare} label="Parent Connect" badge={2} />
        <SidebarItem icon={Users} label="Students" />
      </div>
      
      <div className="mt-auto p-2">
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </div>
  );
  
  // Mobile menu button
  const mobileMenuButton = (
    <div className="md:hidden fixed top-0 left-0 z-30 m-4">
      <button 
        onClick={toggleMobileMenu}
        className="p-2 bg-white rounded-full shadow-md"
      >
        <Menu size={20} />
      </button>
    </div>
  );
  
  // Mobile sidebar
  const mobileSidebar = mobileMenuOpen && (
    <div className="md:hidden fixed inset-0 z-20 bg-black bg-opacity-50">
      <div className="w-64 h-full bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-ss-blue-600 text-xl">शिक्षा</span>
            <span className="font-semibold text-gray-800 text-xl">साथी</span>
          </div>
          <button onClick={toggleMobileMenu} className="p-1 hover:bg-gray-100 rounded">
            <ArrowLeft size={18} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-1 p-2 mt-2">
          <SidebarItem icon={BookOpen} label="Class Dashboard" active={true} />
          <SidebarItem icon={BarChart3} label="Assessment" />
          <SidebarItem icon={Headphones} label="Record Class" />
          <SidebarItem icon={MessageSquare} label="Parent Connect" badge={2} />
          <SidebarItem icon={Users} label="Students" />
        </div>
        
        <div className="mt-auto p-2">
          <SidebarItem icon={Settings} label="Settings" />
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      {desktopSidebar}
      {mobileMenuButton}
      {mobileSidebar}
    </>
  );
};

export default Sidebar;
