
import React from 'react';
import { FileText, MessageSquare, BookOpen, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const VidhyarthiVault = () => {
  const features = [
    { 
      icon: <BookOpen className="text-ss-blue-500" />, 
      text: "AI converts NCERT chapters into 2-minute explainer videos in 22 languages" 
    },
    { 
      icon: <FileText className="text-ss-green-500" />, 
      text: "Auto-generated class notes – summarized & detailed" 
    },
    { 
      icon: <MessageSquare className="text-ss-red-500" />, 
      text: "SMS-based delivery for low-internet households" 
    },
    { 
      icon: <Globe className="text-purple-500" />, 
      text: "Custom assignments + question banks based on student level" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">2. VIDHYARTHI VAULT – NCERT Smart Content Engine</h1>
            
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
                  Content delivery that meets children where they are — in language, level, and format.
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
                    <h3 className="font-medium mb-2">NCERT Chapter to Video Conversion</h3>
                    <select className="w-full p-2 border border-gray-300 rounded mb-2">
                      <option>Select Chapter</option>
                      <option>Chapter 1: Light</option>
                      <option>Chapter 2: Sound</option>
                      <option>Chapter 3: Force and Motion</option>
                    </select>
                    <select className="w-full p-2 border border-gray-300 rounded mb-3">
                      <option>Select Language</option>
                      <option>Hindi</option>
                      <option>Tamil</option>
                      <option>Bengali</option>
                      <option>Marathi</option>
                    </select>
                    <button className="w-full bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 rounded">
                      Generate 2-minute Explainer
                    </button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">SMS-Based Content Delivery</h3>
                    <div className="flex space-x-2">
                      <input type="text" placeholder="Enter phone number" className="flex-1 p-2 border border-gray-300 rounded" />
                      <button className="bg-ss-green-500 hover:bg-ss-green-600 text-white py-2 px-4 rounded">
                        Send
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Today's content: Fractions explained in simple terms</p>
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

export default VidhyarthiVault;
