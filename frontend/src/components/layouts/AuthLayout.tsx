import React, { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import FloatingBubbles from "../ui/FloatingBubbles";
import AppBranding from "../auth/AppBranding";
import ChatPreview from "../auth/ChatPreview";
import FeaturesList from "../auth/FeaturesList";
import AuthCard from "../auth/AuthCard";
import SecurityBadge from "../auth/SecurityBadge";

interface AuthLayoutProps {
  title?: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  title = "Welcome Back", 
  subtitle = "Continue your conversations" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background elements */}
      <FloatingBubbles />
      
      {/* WhatsApp-style pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325D366' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Features and Preview */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12">
          <AppBranding size="large" className="mb-8" />
          <ChatPreview />
          <FeaturesList />
        </div>

        {/* Right side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <AppBranding size="small" />
            </div>

            {/* Auth Card */}
            <AuthCard title={title} subtitle={subtitle}>
              <Outlet />
            </AuthCard>

            {/* Security Badge */}
            <SecurityBadge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;