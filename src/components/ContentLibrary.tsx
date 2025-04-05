
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Download, CheckCircle, BarChart, FileText, Video } from 'lucide-react';

interface ContentLibraryProps {
  className?: string;
}

const contentCategories = [
  { id: 'math', name: 'Mathematics', icon: BarChart, count: 42 },
  { id: 'science', name: 'Science', icon: FileText, count: 38 },
  { id: 'english', name: 'English', icon: BookOpen, count: 29 },
  { id: 'videos', name: 'Video Lessons', icon: Video, count: 15 }
];

const recentResources = [
  {
    id: 1,
    title: 'Fractions Worksheet',
    category: 'Mathematics',
    size: '1.2 MB',
    downloaded: true
  },
  {
    id: 2,
    title: 'Plant Structure - Visual Guide',
    category: 'Science',
    size: '3.5 MB',
    downloaded: true
  },
  {
    id: 3,
    title: 'Grammar Practice Exercises',
    category: 'English',
    size: '850 KB',
    downloaded: false
  }
];

const ContentLibrary = ({ className }: ContentLibraryProps) => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-800">Content Library</h2>
        <p className="text-sm text-gray-500">Offline educational resources</p>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <button 
            className={cn(
              "p-2 rounded-md text-sm text-center transition-colors",
              selectedCategory === 'all' 
                ? "bg-ss-blue-100 text-ss-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            onClick={() => setSelectedCategory('all')}
          >
            All Resources
          </button>
          
          {contentCategories.map((category) => (
            <button 
              key={category.id}
              className={cn(
                "p-2 rounded-md text-sm text-center transition-colors",
                selectedCategory === category.id 
                  ? "bg-ss-blue-100 text-ss-blue-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contentCategories.map((category) => (
            <div 
              key={category.id}
              className="border border-gray-200 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50 cursor-pointer"
            >
              <div 
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2",
                  category.id === 'math' && "bg-ss-blue-100 text-ss-blue-600",
                  category.id === 'science' && "bg-ss-green-100 text-ss-green-600",
                  category.id === 'english' && "bg-ss-yellow-100 text-ss-yellow-700",
                  category.id === 'videos' && "bg-ss-red-100 text-ss-red-600"
                )}
              >
                <category.icon size={24} />
              </div>
              <h3 className="font-medium text-sm">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.count} resources</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Resources</h3>
          
          <div className="space-y-2">
            {recentResources.map((resource) => (
              <div 
                key={resource.id}
                className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
              >
                <div>
                  <p className="text-sm font-medium">{resource.title}</p>
                  <p className="text-xs text-gray-500">
                    {resource.category} • {resource.size}
                  </p>
                </div>
                <div>
                  {resource.downloaded ? (
                    <div className="flex items-center text-ss-green-600">
                      <CheckCircle size={16} />
                    </div>
                  ) : (
                    <button className="p-1 text-gray-500 hover:text-ss-blue-600">
                      <Download size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex justify-center">
        <button className="text-sm text-ss-blue-600 hover:text-ss-blue-800">
          Browse All Resources
        </button>
      </div>
    </div>
  );
};

export default ContentLibrary;
