import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Trophy, Code, Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              <span className="gradient-text">Chat with Your Favorite</span>
              <br />
              <span className="gradient-text">Movie Characters</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Experience the magic of AI-powered conversations with iconic movie characters. 
              Challenge yourself through multiple levels of interaction and climb the leaderboard.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={() => navigate('/chat')}
                className="px-8 py-4 glass-card hover-glow text-lg font-medium flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Start Chatting Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">
            Powered by Advanced Technology
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Experience seamless conversations backed by cutting-edge AI and real-time processing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card p-8 hover-glow">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-pink-500/20 mb-6">
                <MessageSquare className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Natural Conversations</h3>
              <p className="text-gray-300">
                Chat naturally with AI-powered characters that understand context and maintain personality.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 hover-glow">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-purple-500/20 mb-6">
                <Trophy className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Level Up System</h3>
              <p className="text-gray-300">
                Progress through multiple levels of interaction and compete on the leaderboard.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 hover-glow">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-blue-500/20 mb-6">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Developer Friendly</h3>
              <p className="text-gray-300">
                Access our comprehensive API documentation and integrate with your applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;