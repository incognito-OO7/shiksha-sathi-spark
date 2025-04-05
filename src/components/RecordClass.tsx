
import React from 'react';
import { cn } from '@/lib/utils';
import { Mic, Download, Upload, Languages } from 'lucide-react';

interface RecordClassProps {
  className?: string;
}

const languages = [
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'en', name: 'English' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'te', name: 'తెలుగు (Telugu)' }
];

const RecordClass = ({ className }: RecordClassProps) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('hi');
  const [isRecording, setIsRecording] = React.useState(false);
  
  const handleStartRecording = () => {
    setIsRecording(true);
    // Recording logic would go here
  };
  
  const handleStopRecording = () => {
    setIsRecording(false);
    // Stop recording logic would go here
  };
  
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Record Class</h2>
        <p className="text-sm text-gray-500">Capture and transcribe lessons</p>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Language
          </label>
          <div className="relative">
            <select
              className="w-full p-2 pr-8 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ss-blue-500"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <Languages size={16} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex flex-col items-center py-6">
          <div 
            className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center transition-colors cursor-pointer",
              isRecording 
                ? "bg-ss-red-100 text-ss-red-500 animate-pulse-slow" 
                : "bg-ss-blue-100 text-ss-blue-500"
            )}
            onClick={isRecording ? handleStopRecording : handleStartRecording}
          >
            <Mic size={28} />
          </div>
          <p className="mt-3 font-medium">
            {isRecording ? 'Recording...' : 'Tap to Record'}
          </p>
          {isRecording && (
            <p className="text-sm text-gray-500 mt-1">Tap again to stop</p>
          )}
        </div>
        
        <div className="mt-4 border-t border-gray-100 pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Recordings</h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <div>
                <p className="text-sm font-medium">Mathematics_20250404.mp3</p>
                <p className="text-xs text-gray-500">4.2 MB · Hindi</p>
              </div>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-500 hover:text-ss-blue-600">
                  <Download size={16} />
                </button>
                <button className="p-1 text-gray-500 hover:text-ss-blue-600 offline-indicator">
                  <Upload size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
              <div>
                <p className="text-sm font-medium">Science_20250403.mp3</p>
                <p className="text-xs text-gray-500">3.8 MB · Hindi</p>
              </div>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-500 hover:text-ss-blue-600">
                  <Download size={16} />
                </button>
                <button className="p-1 text-gray-500 hover:text-ss-blue-600 synced-indicator">
                  <Upload size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordClass;
