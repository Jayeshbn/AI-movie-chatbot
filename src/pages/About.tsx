import React from 'react';
import { BookOpen, Star, Award, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About MovieChat AI</h1>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600">
            MovieChat AI is an innovative project that combines artificial intelligence with
            cinema, allowing users to engage in meaningful conversations with their favorite
            movie characters. This project is part of the Internship Ladder Challenge,
            designed to showcase advanced AI integration and scalable system architecture.
          </p>
        </section>

        {/* Levels System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Level System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="font-semibold">Level 1: Basic AI Chat</h3>
              </div>
              <p className="text-gray-600">
                Implement fundamental chat functionality with AI-powered responses.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <BookOpen className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold">Level 2: Script Integration</h3>
              </div>
              <p className="text-gray-600">
                Incorporate real movie scripts for more authentic conversations.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Brain className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="font-semibold">Level 3: Advanced AI</h3>
              </div>
              <p className="text-gray-600">
                Implement RAG with vector search for enhanced response accuracy.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold">Level 4: Scaling</h3>
              </div>
              <p className="text-gray-600">
                Optimize for high traffic and implement real-time features.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2 text-gray-600">
              <li>• Frontend: React with TypeScript and Tailwind CSS</li>
              <li>• Backend: Node.js with Express</li>
              <li>• Database: PostgreSQL for data persistence</li>
              <li>• AI: Integration with OpenAI GPT API</li>
              <li>• Vector Search: FAISS for similarity matching</li>
              <li>• Real-time: WebSocket for live chat</li>
              <li>• Monitoring: Prometheus + Grafana</li>
            </ul>
          </div>
        </section>

        {/* Get Started */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started</h2>
          <p className="text-gray-600 mb-4">
            Ready to start chatting with movie characters? Head over to our chat interface
            and begin your journey through the levels. Don't forget to check the leaderboard
            to see how you rank against other users!
          </p>
          <div className="flex space-x-4">
            <a
              href="/chat"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start Chatting
            </a>
            <a
              href="/docs"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View API Docs
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;