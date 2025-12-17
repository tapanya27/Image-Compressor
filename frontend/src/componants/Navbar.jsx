import React, { useState } from 'react';
import { Image, Layers, Download, Menu, X } from 'lucide-react';
import { SignIn, SignInButton, SignUpButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


export default function ImageCompressorNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {user}=useUser();
  const {openSignIn}=useClerk();
  const navigate = useNavigate();

  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
             <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-green-500 bg-clip-text text-transparent text-3xl text-extrabold">
    ImageCompressor
  </span>{' '}
          </div>

          {/* Desktop Navigation - Center */}
         

          {/* Desktop Auth Buttons - Right */}
          <div className="hidden sm:flex items-center space-x-4">
           {!user ? (
              <>
                <SignInButton mode='modal'>
                  <button className="text-purple-600 border-2 border-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 hover:border-green-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                    Login
                  </button>
                  </SignInButton>
                

                <SignUpButton mode="modal" >
                  <button className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 hover:border-green-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-purple-100 transition-colors bg-purple-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col space-y-3">
             
              {!user?(<button  onClick={<SignInButton/>} className="text-purple-600  hover:bg-purple-50 border-2 border-white px-6 py-2 rounded-full font-semibold hover:text-purple-600 transition-all duration-200 text-center mt-2 text-2xl">
                Login
              </button>):(<UserButton/>)}
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 shadow-md text-center text-2xl">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}