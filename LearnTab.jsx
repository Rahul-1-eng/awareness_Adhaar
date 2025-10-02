import React from 'react';
import { Award, CheckCircle, AlertCircle } from 'lucide-react';

export default function LearnTab() {
  const steps = [
    { step: 1, title: 'Gather Documents', desc: 'Original Aadhaar card and bank passbook' },
    { step: 2, title: 'Visit Bank Branch', desc: 'Go to your account holding bank branch' },
    { step: 3, title: 'Request Seeding', desc: 'Ask for DBT Aadhaar Seeding Service' },
    { step: 4, title: 'Verification', desc: 'Bank verifies and submits to NPCI' },
    { step: 5, title: 'Confirm Status', desc: 'Check online after 2-3 days' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Educational Learning Hub</h2>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Understanding DBT-Enabled Accounts</h3>
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg aspect-video flex items-center justify-center mb-4">
          <div className="text-center">
            <Award className="w-16 h-16 text-indigo-600 mx-auto mb-2" />
            <p className="text-gray-700 font-semibold">Video Tutorial Coming Soon</p>
          </div>
        </div>
        <p className="text-gray-700">Learn the step-by-step process of seeding your Aadhaar with your bank account for Direct Benefit Transfer.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Key Differences</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-yellow-300 bg-yellow-50 rounded-lg p-5">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Aadhaar-Linked Account
            </h4>
            <ul className="space-y-2 text-gray-700">
              {['Aadhaar registered with bank','NOT connected to DBT system','Cannot receive scholarships','Requires additional seeding'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-red-600 font-bold">✗</span> <span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-green-300 bg-green-50 rounded-lg p-5">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              DBT-Enabled Seeded Account
            </h4>
            <ul className="space-y-2 text-gray-700">
              {['Aadhaar registered with bank','Connected to DBT system','Can receive scholarships directly','Ready for government benefits'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> <span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">How to Seed Your Aadhaar</h3>
        <div className="space-y-4">
          {steps.map(item => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
