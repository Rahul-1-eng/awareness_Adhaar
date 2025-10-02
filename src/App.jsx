import React, { useState } from 'react';
import Header from './components/Header';
import TabButton from './components/TabButton';
import Chatbot from './components/Chatbot';
import HomeTab from './components/HomeTab';
import LearnTab from './components/LearnTab';
import ScholarshipTab from './components/ScholarshipTab';
import CommunityTab from './components/CommunityTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="container mx-auto px-4 py-8 pb-24">
        {activeTab === 'home' && <HomeTab setActiveTab={setActiveTab} setChatOpen={setChatOpen} />}
        {activeTab === 'learn' && <LearnTab />}
        {activeTab === 'scholarship' && <ScholarshipTab />}
        {activeTab === 'community' && <CommunityTab />}
      </main>

      <Chatbot chatOpen={chatOpen} setChatOpen={setChatOpen} language={language} />

      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition z-50"
        >
          Open Chat
        </button>
      )}
    </div>
  );
}
