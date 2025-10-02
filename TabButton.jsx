import React from 'react';

export default function TabButton({ tab, activeTab, setActiveTab, setMobileMenuOpen }) {
  return (
    <button
      onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition w-full md:w-auto ${
        activeTab === tab.id 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <tab.icon className="w-4 h-4" />
      <span>{tab.label}</span>
    </button>
  );
}
