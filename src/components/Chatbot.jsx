import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { chatbotResponses } from '../data/chatbotResponses';

export default function Chatbot({ chatOpen, setChatOpen, language }) {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Namaste! I am Scholarship Sahayak. How can I assist you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = { type: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let response = '';
      const msg = inputMessage.toLowerCase();

      if (msg.includes('difference') || msg.includes('what is') || msg.includes('explain')) {
        response = chatbotResponses.difference[language];
      } else if (msg.includes('check') || msg.includes('status') || msg.includes('verify')) {
        response = chatbotResponses.check[language];
      } else if (msg.includes('seed') || msg.includes('how') || msg.includes('process')) {
        response = chatbotResponses.seed[language];
      } else if (msg.includes('deadline') || msg.includes('date') || msg.includes('when')) {
        response = chatbotResponses.deadline[language];
      } else if (msg.includes('document') || msg.includes('papers') || msg.includes('required')) {
        response = chatbotResponses.documents[language];
      } else {
        response = language === 'en'
          ? "I can help you understand DBT-enabled Aadhaar seeding. Ask me about difference, status, seeding, deadlines, or documents."
          : "Main DBT aadhaar seeding mein madad kar sakta hoon. Poochein: antar, status, seed kaise karein, deadline, documents";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 800);

    setInputMessage('');
  };

  if (!chatOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col h-[600px] max-h-[calc(100vh-3rem)]">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <h3 className="font-bold">Scholarship Sahayak</h3>
        </div>
        <button onClick={() => setChatOpen(false)} className="hover:bg-white hover:bg-opacity-20 rounded p-1">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button onClick={handleSendMessage} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
