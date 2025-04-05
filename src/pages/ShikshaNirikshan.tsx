
import React from 'react';
import { FileText, Award, BarChart3, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const ShikshaNirikshan = () => {
  const features = [
    { 
      icon: <FileText className="text-ss-blue-500" />, 
      text: "Assignment/exam evaluator (key-based + AI checking)" 
    },
    { 
      icon: <Award className="text-yellow-500" />, 
      text: "Gamified dashboards for teachers and students" 
    },
    { 
      icon: <BarChart3 className="text-ss-green-500" />, 
      text: "Custom assignments based on ongoing learning data" 
    },
    { 
      icon: <MessageSquare className="text-purple-500" />, 
      text: "Feedback loops: Visual cues + text feedback for teachers, Feedback SMS for parents in their language" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">5. SHIKSHA NIRIKSHAN – Smart Assessment & Feedback Layer</h1>
            
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
                  Real-time improvement cycle for both students and teachers.
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
                    <h3 className="font-medium mb-2">Assignment Evaluation</h3>
                    <div className="flex mb-3">
                      <input type="file" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <button className="w-full bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 rounded">
                      Auto-Evaluate
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Gamified Dashboard</h3>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="bg-ss-blue-50 p-2 rounded text-center">
                        <div className="text-ss-blue-700 font-bold">85%</div>
                        <div className="text-xs">Math</div>
                      </div>
                      <div className="bg-ss-green-50 p-2 rounded text-center">
                        <div className="text-ss-green-700 font-bold">92%</div>
                        <div className="text-xs">Science</div>
                      </div>
                      <div className="bg-ss-red-50 p-2 rounded text-center">
                        <div className="text-ss-red-700 font-bold">78%</div>
                        <div className="text-xs">Hindi</div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded text-center">
                        <div className="text-purple-700 font-bold">88%</div>
                        <div className="text-xs">English</div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Weekly Progress:</span>
                      <span className="text-sm font-medium text-ss-green-600">↑ 12%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Parent Feedback SMS</h3>
                    <div className="flex space-x-2">
                      <select className="flex-1 p-2 border border-gray-300 rounded">
                        <option>Select Language</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Bengali</option>
                        <option>Marathi</option>
                      </select>
                      <button className="bg-ss-green-500 hover:bg-ss-green-600 text-white py-2 px-4 rounded">
                        Send
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Preview: "Rahul has improved in Math. Needs help with Science."</p>
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

export default ShikshaNirikshan;
