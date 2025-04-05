
import React from 'react';
import { FileText, Globe, BarChart3, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const NEPBuddy = () => {
  const features = [
    { 
      icon: <Globe className="text-ss-blue-500" />, 
      text: "Converts NEP-regulated curriculum into local languages" 
    },
    { 
      icon: <Info className="text-ss-green-500" />, 
      text: "Auto-updates centralized portal with translated guidelines & syllabus" 
    },
    { 
      icon: <BarChart3 className="text-ss-red-500" />, 
      text: "School-level tracking of NEP implementation progress" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">6. NEP BUDDY – Regional Curriculum Aligner</h1>
            
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
                  Ensures compliance without creating burdens on under-resourced schools.
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
                    <h3 className="font-medium mb-2">NEP Curriculum Translation</h3>
                    <div className="flex space-x-2 mb-3">
                      <select className="flex-1 p-2 border border-gray-300 rounded">
                        <option>Select NEP Module</option>
                        <option>Foundational Literacy</option>
                        <option>Competency-Based Learning</option>
                        <option>Art Integration</option>
                      </select>
                      <select className="flex-1 p-2 border border-gray-300 rounded">
                        <option>Select Language</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Bengali</option>
                        <option>Marathi</option>
                      </select>
                    </div>
                    <button className="w-full bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 rounded">
                      Generate Translation
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Implementation Progress</h3>
                    <div className="space-y-2 mb-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Foundational Literacy</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-ss-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Experiential Learning</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-ss-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Assessment Reforms</span>
                          <span>40%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-ss-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full border border-ss-blue-500 text-ss-blue-500 py-2 rounded">
                      View Detailed Report
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Guidelines & Resources</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded">
                        <div className="flex items-center">
                          <FileText size={16} className="text-ss-blue-500 mr-2" />
                          <span>NEP 2020 Quick Guide</span>
                        </div>
                        <button className="text-xs bg-ss-blue-100 text-ss-blue-700 px-2 py-1 rounded">
                          Download
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded">
                        <div className="flex items-center">
                          <FileText size={16} className="text-ss-green-500 mr-2" />
                          <span>Implementation Roadmap</span>
                        </div>
                        <button className="text-xs bg-ss-blue-100 text-ss-blue-700 px-2 py-1 rounded">
                          Download
                        </button>
                      </div>
                    </div>
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

export default NEPBuddy;
