
import React from 'react';
import { cn } from '@/lib/utils';

interface StudentAssessmentProps {
  className?: string;
}

// Mock data for student assessments
const students = [
  { 
    id: 1, 
    name: 'Aarav Kumar', 
    avatar: '/lovable-uploads/b9583862-fbda-4fc5-9d79-0fc92a05b074.png', 
    assignments: [
      { score: 8, total: 10, mood: 'happy' },
      { score: 9, total: 10, mood: 'happy' },
      { score: 4, total: 10, mood: 'sad' }
    ] 
  },
  { 
    id: 2, 
    name: 'Diya Patel', 
    avatar: null, 
    assignments: [
      { score: 7, total: 10, mood: 'neutral' },
      { score: 6, total: 10, mood: 'neutral' },
      { score: 5, total: 10, mood: 'sad' }
    ] 
  },
  { 
    id: 3, 
    name: 'Vihaan Singh', 
    avatar: null, 
    assignments: [
      { score: 10, total: 10, mood: 'happy' },
      { score: 9, total: 10, mood: 'happy' },
      { score: 8, total: 10, mood: 'happy' }
    ] 
  }
];

const StudentAssessment = ({ className }: StudentAssessmentProps) => {
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'neutral':
        return '😐';
      case 'sad':
        return '☹️';
      default:
        return '😐';
    }
  };
  
  const getProgressColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'bg-ss-green-500';
    if (percentage >= 60) return 'bg-ss-blue-500';
    if (percentage >= 40) return 'bg-ss-yellow-500';
    return 'bg-ss-red-500';
  };
  
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Student Assessment</h2>
        <p className="text-sm text-gray-500">Track progress with emoji feedback</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Student</th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Assignment</th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Vocabulary</th>
              <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">Class Response</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-gray-100">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-ss-blue-100 flex items-center justify-center overflow-hidden">
                      {student.avatar ? (
                        <img src={student.avatar} alt={student.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-ss-blue-700 font-medium">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{student.name}</p>
                    </div>
                  </div>
                </td>
                {student.assignments.map((assignment, idx) => (
                  <td key={idx} className="py-4 px-4">
                    <div className="flex flex-col items-center">
                      <div className="emoji-medium mb-1">{getMoodEmoji(assignment.mood)}</div>
                      <div className="progress-bar-container">
                        <div 
                          className={`progress-bar-fill ${getProgressColor(assignment.score, assignment.total)}`} 
                          style={{ width: `${(assignment.score / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium mt-1">
                        {assignment.score}/{assignment.total}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAssessment;
