import React from 'react';
import { MessageCircle, Users, Globe } from 'lucide-react';

export default function CommunityTab() {
  const features = [
    { icon: Users, title: 'Connect with Peers', desc: 'Join discussions and share experiences with other students.' },
    { icon: MessageCircle, title: 'Ask & Answer', desc: 'Get advice from senior students or alumni regarding scholarships.' },
    { icon: Globe, title: 'Global Tips', desc: 'Learn about scholarship best practices from around India.' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Community Support</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center">
            <feat.icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
            <p className="text-gray-600 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
