
import React from 'react';
import { Radio, MessageSquare, Users, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const SamudayaSangam = () => {
  const features = [
    { 
      icon: <Radio className="text-ss-blue-500" />, 
      text: "IVR calls + community radio for quizzes and storytelling" 
    },
    { 
      icon: <MessageSquare className="text-ss-green-500" />, 
      text: "Weekly SMS to parents with home activity ideas (e.g., \"Use rotis to teach fractions\")" 
    },
    { 
      icon: <Users className="text-ss-red-500" />, 
      text: "Community learning hubs led by trained local volunteers" 
    },
    { 
      icon: <AlertTriangle className="text-yellow-500" />, 
      text: "Disaster-resilient radio/audio-only backup for outages" 
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">4. SAMUDAYA SANGAM – Community Learning Bridge</h1>
            
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
                  Learning continues even without devices or internet – education becomes a household activity.
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
                    <h3 className="font-medium mb-2">IVR & Community Radio</h3>
                    <div className="flex space-x-2 mb-3">
                      <button className="flex-1 flex justify-center items-center space-x-2 bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 px-4 rounded">
                        <Radio size={18} />
                        <span>Listen to Story</span>
                      </button>
                      <button className="flex-1 flex justify-center items-center space-x-2 bg-ss-green-500 hover:bg-ss-green-600 text-white py-2 px-4 rounded">
                        <Radio size={18} />
                        <span>Take Quiz</span>
                      </button>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      Today's radio program: "The Clever Rabbit" - Available in 8 languages
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Weekly SMS Activities</h3>
                    <div className="bg-gray-50 p-3 border border-gray-300 rounded mb-3">
                      <p className="text-sm">
                        <span className="font-medium">This Week's Activity:</span> Use rotis to teach fractions - Cut a roti into halves, quarters to teach basic fraction concepts.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <input type="text" placeholder="Enter phone number" className="flex-1 p-2 border border-gray-300 rounded" />
                      <button className="bg-ss-green-500 hover:bg-ss-green-600 text-white py-2 px-4 rounded">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Community Learning Hubs</h3>
                    <div className="mb-3">
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Find Hub Near You</option>
                        <option>North District Hub</option>
                        <option>East Village Center</option>
                        <option>West Community Hall</option>
                      </select>
                    </div>
                    <button className="w-full bg-ss-blue-500 hover:bg-ss-blue-600 text-white py-2 rounded">
                      View Schedule
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

export default SamudayaSangam;
