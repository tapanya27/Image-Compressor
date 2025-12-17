import React, { useState } from 'react';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const MobileAuthUI = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginScreen onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <SignupScreen onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

const LoginScreen = ({ onSwitchToSignup }) => {
  return (
    <div className="relative">
      {/* Top Gradient Blob */}
      <div className="absolute -top-20 -left-10 w-64 h-64 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-3xl opacity-60"></div>
      
      {/* Main Content */}
      <div className="relative bg-white rounded-3xl p-8 pt-32">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello</h1>
        <p className="text-sm text-gray-500 mb-10">Sign in to your account</p>
        
        {/* Username Input */}
        <div className="mb-5">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Username" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Password Input */}
        <div className="mb-3">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <Lock className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Forgot Password */}
        <div className="text-right mb-10">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
            Forgot your password?
          </a>
        </div>
        
        {/* Sign In Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full py-4 flex items-center justify-center gap-3 font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
          <span>Sign in</span>
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </div>
        </button>
        
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={onSwitchToSignup}
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Create
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient Blob */}
      <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

const SignupScreen = ({ onSwitchToLogin }) => {
  return (
    <div className="relative">
      {/* Top Gradient Blob */}
      <div className="absolute -top-20 -left-10 w-64 h-64 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-3xl opacity-60"></div>
      
      {/* Main Content */}
      <div className="relative bg-white rounded-3xl p-8 pt-32">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Create account</h1>
        
        {/* Username Input */}
        <div className="mb-5">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Username" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Email Input */}
        <div className="mb-5">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <Mail className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Password Input */}
        <div className="mb-5">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <Lock className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Confirm Password Input */}
        <div className="mb-10">
          <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4 border border-gray-100">
            <Lock className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Create Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full py-4 flex items-center justify-center gap-3 font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
          <span>Create</span>
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </div>
        </button>
        
        {/* Social Login */}
        <div className="mt-8">
          <p className="text-xs text-gray-500 text-center mb-5">Or sign up with social account</p>
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-xl font-bold hover:scale-110 transition-transform shadow-md">
              f
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white text-xl font-bold hover:scale-110 transition-transform shadow-md">
              t
            </button>
            <button className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[#EA4335] text-xl font-bold hover:scale-110 transition-transform shadow-md">
              G
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={onSwitchToLogin}
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Sign in
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient Blob */}
      <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

export default MobileAuthUI;