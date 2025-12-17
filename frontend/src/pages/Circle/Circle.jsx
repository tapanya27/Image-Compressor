import React from 'react';
import { Image, Zap, Shield, Download } from 'lucide-react';

export default function StatsShowcase() {
  const stats = [
    {
      icon: Image,
      value: '125K+',
      label: 'Images Compressed',
      color: 'bg-purple-500',
      bgGradient: 'from-purple-100 to-pink-50'
    },
    {
      icon: Zap,
      value: '87%',
      label: 'Average Compression',
      color: 'bg-blue-500',
      bgGradient: 'from-blue-100 to-cyan-50'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Privacy Protected',
      color: 'bg-green-500',
      bgGradient: 'from-green-100 to-emerald-50'
    },
    {
      icon: Download,
      value: '50K+',
      label: 'Happy Users',
      color: 'bg-orange-500',
      bgGradient: 'from-orange-100 to-red-50'
    }
  ];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${stat.color} w-25 h-25 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}