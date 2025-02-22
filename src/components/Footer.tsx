import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-400 font-medium">Jayesh BN</span>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <a href="mailto:jayeshbn10@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                jayeshbn10@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <a href="tel:+919148390903" className="text-gray-400 hover:text-pink-400 transition-colors">
                +91 9148390903
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Jayeshbn/AI-movie-chatbot.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;