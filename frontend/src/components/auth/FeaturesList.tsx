import React, { useState, useEffect } from 'react';
import { MessageCircle, Shield, Users, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesList: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Send messages instantly with real-time delivery"
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Your conversations are private and secure"
    },
    {
      icon: Users,
      title: "Group Chats",
      description: "Connect with multiple friends at once"
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Access your chats from anywhere, anytime"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          {...feature}
          isActive={index === currentFeature}
        />
      ))}
    </div>
  );
};

export default FeaturesList;