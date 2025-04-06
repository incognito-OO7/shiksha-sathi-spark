
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Users } from 'lucide-react';

const Students = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-ss-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Students</h1>
            </div>
            <p className="text-gray-500">Manage your classroom students</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Student Management</h2>
            <p className="text-gray-500 mb-4">View and manage student profiles, attendance, and performance.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <div className="h-8 w-8 bg-ss-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-ss-blue-700 text-sm font-medium">35</span>
                </div>
                <h3 className="font-medium mb-1">Total Students</h3>
                <p className="text-sm text-gray-500">in your classroom</p>
              </div>
              
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <div className="h-8 w-8 bg-ss-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-ss-green-700 text-sm font-medium">28</span>
                </div>
                <h3 className="font-medium mb-1">Present Today</h3>
                <p className="text-sm text-gray-500">attendance record</p>
              </div>
              
              <div className="p-4 bg-white rounded-md border border-gray-200">
                <div className="h-8 w-8 bg-ss-red-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-ss-red-700 text-sm font-medium">7</span>
                </div>
                <h3 className="font-medium mb-1">Absent</h3>
                <p className="text-sm text-gray-500">need follow-up</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-3">Student List</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No.</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aarav Kumar</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Present</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excellent</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Diya Patel</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">002</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Absent</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Good</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vihaan Singh</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">003</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Present</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Needs Improvement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Students;
