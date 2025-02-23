// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MessageSquare, Trophy, Code, Sparkles } from 'lucide-react';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-20 pb-20">
//       {/* Hero Section */}
//       <div className="relative min-h-[80vh] flex items-center">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
//               <span className="gradient-text">Chat with Your Favorite</span>
//               <br />
//               <span className="gradient-text">Movie Characters</span>
//             </h1>
//             <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
//               Experience the magic of AI-powered conversations with iconic movie characters. 
//               Challenge yourself through multiple levels of interaction and climb the leaderboard.
//             </p>
//             <div className="mt-10 flex justify-center gap-4">
//               <button
//                 onClick={() => navigate('/chat')}
//                 className="px-8 py-4 glass-card hover-glow text-lg font-medium flex items-center gap-2"
//               >
//                 <Sparkles className="h-5 w-5" />
//                 Start Chatting Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold gradient-text">
//             Powered by Advanced Technology
//           </h2>
//           <p className="mt-4 text-lg text-gray-300">
//             Experience seamless conversations backed by cutting-edge AI and real-time processing.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="glass-card p-8 hover-glow">
//             <div className="flex flex-col items-center text-center">
//               <div className="p-3 rounded-full bg-pink-500/20 mb-6">
//                 <MessageSquare className="h-8 w-8 text-pink-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Natural Conversations</h3>
//               <p className="text-gray-300">
//                 Chat naturally with AI-powered characters that understand context and maintain personality.
//               </p>
//             </div>
//           </div>

//           <div className="glass-card p-8 hover-glow">
//             <div className="flex flex-col items-center text-center">
//               <div className="p-3 rounded-full bg-purple-500/20 mb-6">
//                 <Trophy className="h-8 w-8 text-purple-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Level Up System</h3>
//               <p className="text-gray-300">
//                 Progress through multiple levels of interaction and compete on the leaderboard.
//               </p>
//             </div>
//           </div>

//           <div className="glass-card p-8 hover-glow">
//             <div className="flex flex-col items-center text-center">
//               <div className="p-3 rounded-full bg-blue-500/20 mb-6">
//                 <Code className="h-8 w-8 text-blue-400" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Developer Friendly</h3>
//               <p className="text-gray-300">
//                 Access our comprehensive API documentation and integrate with your applications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Trophy, Code, PlayCircle, Sparkles, Brain } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text sm:text-5xl md:text-6xl">
                  <span className="block">Chat with your favorite</span>
                  <span className="block">movie characters</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the magic of conversing with iconic movie characters powered by advanced AI.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => navigate('/chat')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 md:py-4 md:text-lg md:px-10"
                    >
                      Start Chatting Now
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
              alt="Movie theater"
            />
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Getting Started</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text sm:text-4xl">
              How to Use MovieChat AI
            </p>
          </div>

          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-indigo-400">1. Choose a Character</h3>
                <p className="mt-2 text-base text-gray-300">
                  Select from our roster of iconic movie characters, each with their unique personality and background.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-indigo-400">2. Start the Conversation</h3>
                <p className="mt-2 text-base text-gray-300">
                  Begin chatting naturally - ask questions, share thoughts, or engage in character-specific discussions.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-indigo-400">3. Enjoy AI Responses</h3>
                <p className="mt-2 text-base text-gray-300">
                  Experience contextually aware responses that match the character's personality, mannerisms, and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text sm:text-4xl">
              A new way to experience movies
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-indigo-400">AI-Powered Chat</h3>
                  <p className="mt-2 text-base text-gray-300">
                    Engage in meaningful conversations with AI-powered movie characters that understand context and personality.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-indigo-400">Competitive Leaderboard</h3>
                  <p className="mt-2 text-base text-gray-300">
                    Complete challenges and climb the ranks on our global leaderboard.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-gray-900 ring-1 ring-gray-800 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-indigo-400">Open API</h3>
                  <p className="mt-2 text-base text-gray-300">
                    Access our powerful API to build your own applications and integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;