
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { MessageSquare } from 'lucide-react';
import ParentConnectComponent from '@/components/ParentConnect';

const ParentConnectPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-ss-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Parent Connect</h1>
            </div>
            <p className="text-gray-500">Communicate with parents and share student progress</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ParentConnectComponent className="col-span-1 lg:col-span-2" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParentConnectPage;
