import React from 'react';
import { MessageCircle } from 'lucide-react';

interface AppBrandingProps {
  size?: 'small' | 'large';
  showTagline?: boolean;
  className?: string;
}

const AppBranding: React.FC<AppBrandingProps> = ({ 
  size = 'large', 
  showTagline = true, 
  className = '' 
}) => {
  const isLarge = size === 'large';
  
  return (
    <div className={`text-center ${className}`}>
      <div className={`inline-flex items-center justify-center bg-green-500 rounded-3xl shadow-lg mb-4 ${
        isLarge ? 'w-20 h-20' : 'w-16 h-16'
      }`}>
        <MessageCircle className={`text-white ${isLarge ? 'w-10 h-10' : 'w-8 h-8'}`} />
      </div>
      <h1 className={`font-bold text-gray-800 mb-2 ${isLarge ? 'text-4xl' : 'text-3xl'}`}>
        QuickTalk
      </h1>
      {showTagline && (
        <p className="text-green-600 font-medium">Simple. Reliable. Private.</p>
      )}
    </div>
  );
};

export default AppBranding;