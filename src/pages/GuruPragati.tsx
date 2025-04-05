
import React from 'react';
import { FileText, MessageSquare, Users, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const GuruPragati = () => {
  const features = [
    { 
      icon: <Users className="text-ss-blue-500" />, 
      text: "AI classroom simulator (simulate 60-student multilingual class)" 
    },
    { 
      icon: <FileText className="text-ss-green-500" />, 
      text: "Auto-generated reports from voice notes" 
    },
    { 
      icon: <CheckSquare className="text-ss-red-500" />, 
      text: "Visual & text-based feedback tools for teachers to reflect on classroom practices" 
    },
    { 
      icon: <Users className="text-purple-500" />, 
      text: "Peer-grouping via WhatsApp/SMS for shared challenges" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">3. GURU PRAGATI – Teacher Co-Pilot & Training Hub</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">{feature.icon}</div>
                      <p className="text-gray-700">{feature.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border border-gray-200 mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Contextual capacity building without removing teachers from classrooms.
                </p>
              </CardContent>
            </Card>
            
            {/* Demo Implementation */}
            <Card className="border border-ss-blue-200 bg-ss-blue-50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-ss-blue-700">Demo Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">AI Classroom Simulator</h3>
                    <div className="p-3 border border-gray-300 rounded bg-gray-50 mb-3">
                      <p className="font-medium">Scenario:</p>
                      <p className="text-sm">60-student class with mixed Hindi and Tamil speakers learning division concepts</p>
                    </div>
                    <button className="w-full bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 rounded">
                      Start Simulation
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Voice Notes to Reports</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <button className="flex items-center space-x-2 bg-ss-red-500 hover:bg-ss-red-600 text-white py-2 px-4 rounded-lg">
                        <MessageSquare size={18} />
                        <span>Record Voice Notes</span>
                      </button>
                    </div>
                    <button className="w-full bg-ss-green-500 hover:bg-ss-green-600 text-white py-2 rounded mt-2">
                      Generate Report
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Teacher Peer Groups</h3>
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-300 mb-2">
                      <span>Math Teachers Group</span>
                      <span className="bg-ss-green-100 text-ss-green-700 px-2 py-0.5 rounded-full text-xs">8 members</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-300 mb-2">
                      <span>Science Teachers Hub</span>
                      <span className="bg-ss-blue-100 text-ss-blue-700 px-2 py-0.5 rounded-full text-xs">12 members</span>
                    </div>
                    <button className="w-full border border-ss-blue-500 text-ss-blue-500 py-2 rounded">
                      Join a Group
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruPragati;
