import React, { useState, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { webSocketService } from '../services/socket';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'bot'; message: string }>>([]);
  const [isConnected, setIsConnected] = useState(false);

  const characters = [
    'Tony Stark (Iron Man)',
    'Jack Sparrow',
    'Darth Vader',
    'The Joker',
    'Sherlock Holmes'
  ];

  useEffect(() => {
    webSocketService.connect(import.meta.env.VITE_WS_URL || 'ws://localhost:3000');
    setIsConnected(true);

    webSocketService.onMessage((data) => {
      setChatHistory(prev => [...prev, { role: 'bot', message: data.message }]);
    });

    return () => {
      webSocketService.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !selectedCharacter || !isConnected) return;

    setChatHistory(prev => [...prev, { role: 'user', message }]);
    webSocketService.sendMessage(selectedCharacter, message);
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-8rem)]">
      <div className="glass-card h-full flex flex-col">
        {/* Character Selection */}
        <div className="p-4 border-b border-white/10">
          <select
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select a character...</option>
            {characters.map(char => (
              <option key={char} value={char}>{char}</option>
            ))}
          </select>
        </div>

        {/* Connection Status */}
        {!isConnected && (
          <div className="p-2 bg-pink-500/20 text-pink-300 text-center flex items-center justify-center gap-2">
            <Loader className="h-4 w-4 animate-spin" />
            Connecting to server...
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  chat.role === 'user'
                    ? 'bg-pink-500/20 text-white'
                    : 'bg-blue-500/20 text-white'
                }`}
              >
                {chat.message}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              disabled={!selectedCharacter || !message.trim() || !isConnected}
              className="bg-pink-500/20 text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-500/30 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;