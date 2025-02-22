import React from 'react';
import { Code, Terminal, Database } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">API Documentation</h1>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-600">
            The MovieChat AI API enables developers to integrate character-based conversations
            into their applications. Our API provides endpoints for chat interactions,
            leaderboard access, and user progression tracking.
          </p>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Authentication</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-4">
              All API requests require an API key to be included in the header:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`Authorization: Bearer YOUR_API_KEY`}
              </code>
            </pre>
          </div>
        </section>

        {/* Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Endpoints</h2>

          {/* Chat Endpoint */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Terminal className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">POST /chat</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-4">Send a message to a movie character:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
                <code>
{`{
  "character": "Tony Stark",
  "message": "How did you become Iron Man?"
}`}
                </code>
              </pre>
              <p className="text-gray-600">Response:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>
{`{
  "response": "Well, it's quite a story...",
  "character": "Tony Stark",
  "timestamp": "2024-03-15T20:00:00Z"
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Leaderboard Endpoint */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">GET /leaderboard</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-4">Retrieve the current leaderboard:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>
{`{
  "leaderboard": [
    {
      "rank": 1,
      "username": "user123",
      "score": 2500,
      "level": 5
    },
    ...
  ]
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rate Limits</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">
              The API is limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>5 requests per second per user</li>
              <li>1000 requests per day per API key</li>
              <li>Burst capacity of up to 10 requests</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;