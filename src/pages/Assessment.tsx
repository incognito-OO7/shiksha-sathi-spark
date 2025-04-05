
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { BarChart3 } from 'lucide-react';

const Assessment = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-ss-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Assessment</h1>
            </div>
            <p className="text-gray-500">Track and evaluate student performance</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Student Assessment Dashboard</h2>
            <p className="text-gray-500 mb-4">View detailed assessment data and analytics for your class.</p>
            
            <div className="p-4 bg-ss-blue-50 rounded-md border border-ss-blue-100 text-ss-blue-700 mb-4">
              This is a detailed view of the Assessment section. Here you'll find comprehensive tools for evaluating student performance and tracking progress over time.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <h3 className="font-medium mb-2">Recent Assessments</h3>
                <p className="text-sm text-gray-500">View and manage recent assessments</p>
              </div>
              
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <h3 className="font-medium mb-2">Assessment Reports</h3>
                <p className="text-sm text-gray-500">Generate comprehensive reports</p>
              </div>
              
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <h3 className="font-medium mb-2">Create Assessment</h3>
                <p className="text-sm text-gray-500">Create new assessments for your class</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Assessment;
