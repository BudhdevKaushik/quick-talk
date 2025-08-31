import React from 'react';
import { Shield } from 'lucide-react';

const SecurityBadge: React.FC = () => {
  return (
    <div className="text-center mt-6 space-y-2">
      <div className="flex items-center justify-center gap-2 text-green-600">
        <Shield className="w-4 h-4" />
        <span className="text-sm font-medium">End-to-end encrypted</span>
      </div>
      <p className="text-xs text-gray-500">
        © 2025 QuickTalk. Connecting people worldwide.
      </p>
    </div>
  );
};

export default SecurityBadge;