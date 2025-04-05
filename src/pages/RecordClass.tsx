
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Headphones } from 'lucide-react';
import RecordClassComponent from '@/components/RecordClass';

const RecordClassPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-ss-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Record Class</h1>
            </div>
            <p className="text-gray-500">Create and manage classroom recordings</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <RecordClassComponent className="col-span-1 lg:col-span-2" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecordClassPage;
