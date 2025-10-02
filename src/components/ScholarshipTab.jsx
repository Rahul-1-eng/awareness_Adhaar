import React from 'react';
import { Calendar, FileText, Award, Bell } from 'lucide-react';

export default function ScholarshipTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Scholarship Information</h2>

      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <div className="flex gap-3">
          <Bell className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-800 mb-2">Important Notice</h3>
            <p className="text-red-700">Your Aadhaar must be DBT-enabled BEFORE the scholarship application deadline.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[{
          title: 'Pre-Matric Scholarship',
          icon: Award,
          deadline: 'Application: Aug-Oct, Disbursement: Dec-Jan'
        },{
          title: 'Post-Matric Scholarship',
          icon: Award,
          deadline: 'Application: Sep-Nov, Disbursement: Jan-Feb'
        }].map((sch, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
            <sch.icon className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">{sch.title}</h4>
              <p className="text-gray-600 text-sm">{sch.deadline}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-indigo-600" />
          Required Documents
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {['Aadhaar Card', 'Caste Certificate', 'Income Certificate', 'Mark Sheet', 'School ID', 'Bank Passbook', 'Photographs'].map((doc, idx) => (
            <li key={idx}>{doc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
