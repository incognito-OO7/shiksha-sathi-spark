
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StudentAssessment from '@/components/StudentAssessment';
import LearningGaps from '@/components/LearningGaps';
import RecordClass from '@/components/RecordClass';
import ParentConnect from '@/components/ParentConnect';
import ContentLibrary from '@/components/ContentLibrary';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [online, setOnline] = useState(true);
  const { toast } = useToast();
  
  // Toggle online/offline for demonstration
  const toggleOnlineStatus = () => {
    setOnline(!online);
    toast({
      title: online ? "Switched to offline mode" : "Back online",
      description: online 
        ? "App will work with locally saved data" 
        : "Connected to network. Syncing data...",
    });
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header online={online} />
        
        <main className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Class Dashboard</h1>
              <p className="text-gray-500">Welcome back, Teacher</p>
            </div>
            
            <button 
              onClick={toggleOnlineStatus}
              className={`px-3 py-1 rounded-full text-sm ${
                online 
                  ? 'bg-ss-green-100 text-ss-green-700' 
                  : 'bg-ss-red-100 text-ss-red-700'
              }`}
            >
              {online ? 'Online Mode' : 'Offline Mode'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StudentAssessment className="col-span-1 lg:col-span-2" />
            
            <LearningGaps />
            
            <RecordClass />
            
            <ParentConnect />
            
            <ContentLibrary className="col-span-1 lg:col-span-2" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
