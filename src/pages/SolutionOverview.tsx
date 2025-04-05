
import React from 'react';
import { Mic, MessageSquare, Bot, Award, FileText, BookOpen, Globe, Users, CheckSquare, Radio, AlertTriangle, BarChart3, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Link } from 'react-router-dom';

const SolutionOverview = () => {
  const solutions = [
    {
      id: 1,
      name: "ADHYAYAN MITRA",
      description: "AI-Powered Learning Companion",
      features: [
        "Real-time voice-based learning gap detection (multilingual)",
        "Low-bandwidth emoji dashboards for comprehension",
        "In-app AI \"Offline Mode\" to record attention spans, topic mastery",
        "AI-generated challenge tasks for advanced learners"
      ],
      impact: "Personalized learning in overcrowded classrooms with no extra infrastructure.",
      path: "/adhyayan-mitra",
      icon: <Bot className="h-8 w-8 text-white" />,
      color: "bg-ss-blue-500"
    },
    {
      id: 2,
      name: "VIDHYARTHI VAULT",
      description: "NCERT Smart Content Engine",
      features: [
        "AI converts NCERT chapters into 2-minute explainer videos in 22 languages",
        "Auto-generated class notes – summarized & detailed",
        "SMS-based delivery for low-internet households",
        "Custom assignments + question banks based on student level"
      ],
      impact: "Content delivery that meets children where they are — in language, level, and format.",
      path: "/vidhyarthi-vault",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "bg-ss-green-500"
    },
    {
      id: 3,
      name: "GURU PRAGATI",
      description: "Teacher Co-Pilot & Training Hub",
      features: [
        "AI classroom simulator (simulate 60-student multilingual class)",
        "Auto-generated reports from voice notes",
        "Visual & text-based feedback tools for teachers to reflect on classroom practices",
        "Peer-grouping via WhatsApp/SMS for shared challenges"
      ],
      impact: "Contextual capacity building without removing teachers from classrooms.",
      path: "/guru-pragati",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-ss-red-500"
    },
    {
      id: 4,
      name: "SAMUDAYA SANGAM",
      description: "Community Learning Bridge",
      features: [
        "IVR calls + community radio for quizzes and storytelling",
        "Weekly SMS to parents with home activity ideas (e.g., \"Use rotis to teach fractions\")",
        "Community learning hubs led by trained local volunteers",
        "Disaster-resilient radio/audio-only backup for outages"
      ],
      impact: "Learning continues even without devices or internet – education becomes a household activity.",
      path: "/samudaya-sangam",
      icon: <Radio className="h-8 w-8 text-white" />,
      color: "bg-purple-500"
    },
    {
      id: 5,
      name: "SHIKSHA NIRIKSHAN",
      description: "Smart Assessment & Feedback Layer",
      features: [
        "Assignment/exam evaluator (key-based + AI checking)",
        "Gamified dashboards for teachers and students",
        "Custom assignments based on ongoing learning data",
        "Feedback loops: Visual cues + text feedback for teachers, Feedback SMS for parents in their language"
      ],
      impact: "Real-time improvement cycle for both students and teachers.",
      path: "/shiksha-nirikshan",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "bg-yellow-500"
    },
    {
      id: 6,
      name: "NEP BUDDY",
      description: "Regional Curriculum Aligner",
      features: [
        "Converts NEP-regulated curriculum into local languages",
        "Auto-updates centralized portal with translated guidelines & syllabus",
        "School-level tracking of NEP implementation progress"
      ],
      impact: "Ensures compliance without creating burdens on under-resourced schools.",
      path: "/nep-buddy",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "bg-ss-blue-700"
    }
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Solution Description</h1>
                <p className="text-gray-600">Our solution consists of 6 parts</p>
              </div>
              
              <div className="flex space-x-3">
                <img src="/lovable-uploads/b4b56bd7-880f-4a5a-aacb-57ebf6d3723a.png" alt="Partner Logos" className="h-10 object-contain" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution) => (
                <Card key={solution.id} className="border border-gray-200 overflow-hidden">
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div className={`${solution.color} p-2 rounded-lg mr-3`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{solution.id}. {solution.name}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Impact:</h4>
                        <p className="text-gray-700">{solution.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-4 border-t border-gray-100">
                    <Link 
                      to={solution.path} 
                      className="w-full inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ss-blue-600 hover:bg-ss-blue-700 focus:outline-none"
                    >
                      View Demo
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionOverview;
