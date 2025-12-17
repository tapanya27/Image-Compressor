import React from 'react';
import { Shield, Zap, Download, Palette, Smartphone, Globe } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: '100% Private',
      description: 'All processing happens in your browser. Your images never leave your device.',
      color: 'bg-gradient-to-r from-violet-600 via-green-400 to-green-500',
      cardBg: 'bg-white'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Advanced compression algorithms deliver results in seconds, not minutes.',
      color: 'bg-gradient-to-r from-violet-600 via-orange-400 to-orange-500',
      cardBg: 'bg-white'
    },
    {
      icon: Download,
      title: 'Batch Processing',
      description: 'Compress multiple images at once and download as a convenient ZIP file.',
      color: 'bg-gradient-to-r from-violet-600 via-blue-400 to-blue-500',
      cardBg: 'bg-white'
    },
    {
      icon: Palette,
      title: 'Multiple Formats',
      description: 'Support for JPEG, PNG, and WebP with customizable quality settings.',
      color: 'bg-gradient-to-r from-violet-600 via-purple-400 to-purple-500',
      cardBg: 'bg-white'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
      color: 'bg-gradient-to-r from-violet-600 via-indigo-400 to-indigo-500',
      cardBg:'bg-white'
    },
    {
      icon: Globe,
      title: 'No Registration',
      description: 'Start compressing immediately. No sign-ups, no accounts, no hassle.',
      color: 'bg-gradient-to-r from-violet-600 via-cyan-400 to-cyan-500',
      cardBg: 'bg-white'
    }
  ];

  return (
    <div className="py-12 px-8 bg-white">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-green-500 bg-clip-text text-transparent">
    ImageCompressor
  </span>{' '}
          </h1>
          <p className="text-xl text-semibold text-gray-600 max-w-3xl mx-auto">
            Professional-grade image compression with privacy and speed at its core
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto px-15 py-25 h-225">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`${feature.cardBg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-normal text-2xl leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}