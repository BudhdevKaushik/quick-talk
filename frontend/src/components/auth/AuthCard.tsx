import React from 'react';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showFooter?: boolean;
  footerText?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  showFooter = true,
  footerText = "By signing in, you agree to our Terms of Service and Privacy Policy"
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-green-100 text-sm">{subtitle}</p>
      </div>

      {/* Content */}
      <div className="p-8">
        {children}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-xs text-gray-500">{footerText}</p>
        </div>
      )}
    </div>
  );
};

export default AuthCard;
