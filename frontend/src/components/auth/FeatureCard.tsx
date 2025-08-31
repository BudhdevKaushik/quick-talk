import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive = false,
  className = '' 
}) => {
  return (
    <div className={`flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-100 transition-all duration-500 ${
      isActive ? 'opacity-100 scale-105' : 'opacity-70'
    } ${className}`}>
      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-gray-600 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;