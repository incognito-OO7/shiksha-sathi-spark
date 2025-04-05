
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Radio, 
  CheckSquare, 
  Globe,
  Mic,
  Bot,
  MessageCircle,
  AlertTriangle,
  Award,
  BarChart3
} from 'lucide-react';

const SolutionOverview = () => {
  const solutions = [
    {
      id: 1,
      title: "ADHYAYAN MITRA",
      subtitle: "AI-Powered Learning Companion",
      features: [
        { icon: <Mic className="h-5 w-5 text-ss-green-600" />, text: "Real-time voice-based learning gap detection (multilingual)" },
        { icon: <MessageSquare className="h-5 w-5 text-ss-blue-600" />, text: "Low-bandwidth emoji dashboards for comprehension" },
        { icon: <Bot className="h-5 w-5 text-ss-purple-600" />, text: "In-app AI \"Offline Mode\" to record attention spans, topic mastery" },
        { icon: <Award className="h-5 w-5 text-ss-orange-600" />, text: "AI-generated challenge tasks for advanced learners" }
      ],
      impact: "Personalized learning in overcrowded classrooms with no extra infrastructure."
    },
    {
      id: 2,
      title: "VIDHYARTHI VAULT",
      subtitle: "NCERT Smart Content Engine",
      features: [
        { icon: <FileText className="h-5 w-5 text-ss-blue-600" />, text: "AI converts NCERT chapters into 2-minute explainer videos in 22 languages" },
        { icon: <BookOpen className="h-5 w-5 text-ss-green-600" />, text: "Auto-generated class notes – summarized & detailed" },
        { icon: <MessageCircle className="h-5 w-5 text-ss-red-600" />, text: "SMS-based delivery for low-internet households" },
        { icon: <CheckSquare className="h-5 w-5 text-ss-purple-600" />, text: "Custom assignments + question banks based on student level" }
      ],
      impact: "Content delivery that meets children where they are – in language, level, and format."
    },
    {
      id: 3,
      title: "GURU PRAGATI",
      subtitle: "Teacher Co-Pilot & Training Hub",
      features: [
        { icon: <Bot className="h-5 w-5 text-ss-purple-600" />, text: "AI classroom simulator (simulate 60-student multilingual class)" },
        { icon: <FileText className="h-5 w-5 text-ss-green-600" />, text: "Auto-generated reports from voice notes" },
        { icon: <BarChart3 className="h-5 w-5 text-ss-blue-600" />, text: "Visual & text-based feedback tools for teachers to reflect on classroom practices" },
        { icon: <MessageSquare className="h-5 w-5 text-ss-orange-600" />, text: "Peer-grouping via WhatsApp/SMS for shared challenges" }
      ],
      impact: "Contextual capacity building without removing teachers from classrooms."
    },
    {
      id: 4,
      title: "SAMUDAYA SANGAM",
      subtitle: "Community Learning Bridge",
      features: [
        { icon: <Radio className="h-5 w-5 text-ss-red-600" />, text: "IVR calls + community radio for quizzes and storytelling" },
        { icon: <MessageCircle className="h-5 w-5 text-ss-blue-600" />, text: "Weekly SMS to parents with home activity ideas (e.g., \"Use rotis to teach fractions\")" },
        { icon: <Globe className="h-5 w-5 text-ss-orange-600" />, text: "Community learning hubs led by trained local volunteers" },
        { icon: <AlertTriangle className="h-5 w-5 text-ss-purple-600" />, text: "Disaster-resilient radio/audio-only backup for outages" }
      ],
      impact: "Learning continues even without devices or internet – education becomes a household activity."
    },
    {
      id: 5,
      title: "SHIKSHA NIRIKSHAN",
      subtitle: "Smart Assessment & Feedback Layer",
      features: [
        { icon: <FileText className="h-5 w-5 text-ss-green-600" />, text: "Assignment/exam evaluator (key-based + AI checking)" },
        { icon: <Award className="h-5 w-5 text-ss-blue-600" />, text: "Gamified dashboards for teachers and students" },
        { icon: <CheckSquare className="h-5 w-5 text-ss-purple-600" />, text: "Custom assignments based on ongoing learning data" },
        { icon: <MessageSquare className="h-5 w-5 text-ss-orange-600" />, text: "Feedback loops: Visual cues + text feedback for teachers, Feedback SMS for parents in their language" }
      ],
      impact: "Real-time improvement cycle for both students and teachers."
    },
    {
      id: 6,
      title: "NEP BUDDY",
      subtitle: "Regional Curriculum Aligner",
      features: [
        { icon: <Globe className="h-5 w-5 text-ss-green-600" />, text: "Converts NEP-regulated curriculum into local languages" },
        { icon: <FileText className="h-5 w-5 text-ss-blue-600" />, text: "Auto-updates centralized portal with translated guidelines & syllabus" },
        { icon: <BarChart3 className="h-5 w-5 text-ss-red-600" />, text: "School-level tracking of NEP implementation progress" }
      ],
      impact: "Ensures compliance without creating burdens on under-resourced schools."
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Solution Description</h1>
            <p className="text-gray-500">Our solution consists of 6 parts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div 
                key={solution.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
              >
                <div className="mb-3 flex items-center">
                  <div className="bg-ss-blue-50 text-ss-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    {solution.id}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{solution.title}</h2>
                    <p className="text-sm text-gray-600">{solution.subtitle}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h3 className="text-sm font-medium mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-0.5">{feature.icon}</span>
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Impact:</h3>
                  <p className="text-sm text-gray-700">{solution.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SolutionOverview;
