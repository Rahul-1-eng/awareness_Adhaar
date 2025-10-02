import React from 'react';
import { Award, CheckCircle, AlertCircle, Lightbulb, HelpCircle, MapPin, FileText, Calendar } from 'lucide-react';

export default function HomeTab({ setActiveTab, setChatOpen }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Do not Miss Your Scholarship!</h2>
        <p className="text-lg mb-6">Ensure your Aadhaar is DBT-enabled to receive scholarships directly.</p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setActiveTab('learn')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Learning
          </button>
          <button 
            onClick={() => setChatOpen(true)}
            className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition"
          >
            Talk to Sahayak AI
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[{
          icon: CheckCircle,
          title: 'DBT-Enabled',
          desc: 'Direct scholarship transfer to your account',
          bg: 'bg-green-100',
          color: 'text-green-600'
        },{
          icon: AlertCircle,
          title: 'Aadhaar-Linked',
          desc: 'Not enough! Must be seeded for DBT',
          bg: 'bg-yellow-100',
          color: 'text-yellow-600'
        },{
          icon: Lightbulb,
          title: 'Need Help?',
          desc: 'Our AI assistant is here 24/7',
          bg: 'bg-blue-100',
          color: 'text-blue-600'
        }].map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`${card.bg} p-3 rounded-full`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-indigo-600" />
          Quick Actions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[{
            icon: CheckCircle,
            label: 'Check DBT Status'
          },{
            icon: MapPin,
            label: 'Find Nearest Bank'
          },{
            icon: FileText,
            label: 'Document Checklist'
          },{
            icon: Calendar,
            label: 'Scholarship Deadlines'
          }].map((action, idx) => (
            <button key={idx} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition">
              <action.icon className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
