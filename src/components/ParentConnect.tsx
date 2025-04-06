
import React from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, Send, User, Clock, ArrowRight } from 'lucide-react';

interface ParentConnectProps {
  className?: string;
}

const parentMessages = [
  {
    id: 1,
    parent: 'Mr. Kumar',
    student: 'Aarav Kumar',
    time: '2 hours ago',
    message: 'Will Aarav need to bring additional notebooks for the science project?',
    read: true,
    replied: true
  },
  {
    id: 2,
    parent: 'Mrs. Patel',
    student: 'Diya Patel',
    time: 'Yesterday',
    message: 'Diya will be absent tomorrow due to a doctor\'s appointment.',
    read: true,
    replied: false
  },
  {
    id: 3,
    parent: 'Mr. Singh',
    student: 'Vihaan Singh',
    time: '3 days ago',
    message: 'When is the next parent-teacher meeting scheduled?',
    read: false,
    replied: false
  }
];

const ParentConnect = ({ className }: ParentConnectProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Parent Connect</h2>
        <p className="text-sm text-gray-500">SMS and visual reports for parents</p>
      </div>
      
      <div className="p-4">
        <div className="flex space-x-2 mb-4">
          <button className="flex-1 bg-ss-blue-500 text-white py-2 rounded-md text-sm flex items-center justify-center">
            <MessageSquare size={16} className="mr-1" />
            Send Report
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md text-sm flex items-center justify-center">
            <Send size={16} className="mr-1" />
            Send SMS
          </button>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Messages</h3>
          
          <div className="space-y-3">
            {parentMessages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "p-3 rounded-lg border",
                  message.read ? "border-gray-200" : "border-ss-blue-200 bg-ss-blue-50"
                )}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <User size={16} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{message.parent}</p>
                      <p className="text-xs text-gray-500">{message.student}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    {message.time}
                  </div>
                </div>
                
                <p className="text-sm mt-2">{message.message}</p>
                
                <div className="mt-2 flex justify-between items-center">
                  {message.replied ? (
                    <span className="text-xs text-ss-green-600">Replied</span>
                  ) : (
                    <button className="text-xs text-ss-blue-600 hover:text-ss-blue-800 flex items-center">
                      Reply
                      <ArrowRight size={12} className="ml-1" />
                    </button>
                  )}
                  
                  {!message.read && (
                    <span className="text-xs bg-ss-blue-100 text-ss-blue-600 px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-center">
        <button className="text-sm text-ss-blue-600 hover:text-ss-blue-800">
          View All Messages
        </button>
      </div>
    </div>
  );
};

export default ParentConnect;
