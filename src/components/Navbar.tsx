import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-lg border-b border-white/10 dark:text-white light:text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover-glow p-2 rounded-lg">
              <Film className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-bold gradient-text">MovieChat AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link to="/chat" className="px-4 py-2 rounded-lg hover:bg-white/5 dark:text-gray-300 light:text-gray-600 hover:text-current transition-colors">Chat</Link>
            <Link to="/leaderboard" className="px-4 py-2 rounded-lg hover:bg-white/5 dark:text-gray-300 light:text-gray-600 hover:text-current transition-colors">Leaderboard</Link>
            <Link to="/docs" className="px-4 py-2 rounded-lg hover:bg-white/5 dark:text-gray-300 light:text-gray-600 hover:text-current transition-colors">API Docs</Link>
            <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-white/5 dark:text-gray-300 light:text-gray-600 hover:text-current transition-colors">About</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;