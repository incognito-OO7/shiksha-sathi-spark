
import React from 'react';
import { Mic, MessageSquare, Bot, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const AdhyayanMitra = () => {
  const features = [
    { 
      icon: <MessageSquare className="text-ss-blue-500" />, 
      text: "Real-time voice-based learning gap detection (multilingual)" 
    },
    { 
      icon: <Award className="text-yellow-500" />, 
      text: "Low-bandwidth emoji dashboards for comprehension" 
    },
    { 
      icon: <Bot className="text-ss-green-500" />, 
      text: "In-app AI \"Offline Mode\" to record attention spans, topic mastery" 
    },
    { 
      icon: <Award className="text-purple-500" />, 
      text: "AI-generated challenge tasks for advanced learners" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">1. ADHYAYAN MITRA – AI-Powered Learning Companion</h1>
            
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
                  Personalized learning in overcrowded classrooms with no extra infrastructure.
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
                    <h3 className="font-medium mb-2">Voice-Based Learning Gap Detection</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <button className="flex items-center space-x-2 bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 px-4 rounded-lg">
                        <Mic size={18} />
                        <span>Start Recording</span>
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">Speak in any language to detect learning gaps</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Emoji Dashboard</h3>
                    <div className="flex justify-between">
                      <div className="text-center">
                        <span className="text-2xl">😊</span>
                        <p className="text-xs">Math</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl">😐</span>
                        <p className="text-xs">Science</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl">🤔</span>
                        <p className="text-xs">History</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl">😀</span>
                        <p className="text-xs">Language</p>
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

export default AdhyayanMitra;
