
import React from 'react';
import { cn } from '@/lib/utils';
import { AlertTriangle, ArrowRight, Book } from 'lucide-react';

interface LearningGapsProps {
  className?: string;
}

// Mock data for learning gaps
const learningGaps = [
  {
    id: 1,
    student: 'Aarav Kumar',
    subject: 'Mathematics',
    topic: 'Division',
    severity: 'high',
    resources: 3
  },
  {
    id: 2,
    student: 'Diya Patel',
    subject: 'English',
    topic: 'Grammar',
    severity: 'medium',
    resources: 5
  },
  {
    id: 3,
    student: 'Vihaan Singh',
    subject: 'Science',
    topic: 'Plant Structure',
    severity: 'low',
    resources: 2
  }
];

const LearningGaps = ({ className }: LearningGapsProps) => {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-ss-red-100 text-ss-red-700">
            <AlertTriangle size={12} />
            High Priority
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-ss-yellow-100 text-ss-yellow-700">
            <AlertTriangle size={12} />
            Medium
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-ss-blue-100 text-ss-blue-700">
            Info
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Learning Gaps</h2>
        <p className="text-sm text-gray-500">Identify and address student needs</p>
      </div>
      
      <div className="divide-y divide-gray-100">
        {learningGaps.map((gap) => (
          <div key={gap.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{gap.student}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {gap.subject} - {gap.topic}
                </p>
                <div className="mt-2">
                  {getSeverityBadge(gap.severity)}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-ss-blue-600 text-sm">
                  <Book size={14} />
                  <span>{gap.resources} resources</span>
                </div>
                <button className="mt-2 flex items-center text-xs text-ss-blue-600 hover:text-ss-blue-800">
                  View Resources
                  <ArrowRight size={12} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-center">
        <button className="text-sm text-ss-blue-600 hover:text-ss-blue-800">
          View All Learning Gaps
        </button>
      </div>
    </div>
  );
};

export default LearningGaps;
