import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-8 mt-8">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Logo and Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform -skew-x-12">
              <div className="bg-white w-6 h-6 rounded transform skew-x-12"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">ImageCompressor</span>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <p className="text-gray-600 text-lg">
            Copyright Image Compressor | All rights reserved.
          </p>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex items-center gap-3 mr-8">
          <a 
            href="#" 
            className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-gray-700" />
          </a>
          <a 
            href="#" 
            className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-gray-700" />
          </a>
          <a 
            href="#" 
            className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}