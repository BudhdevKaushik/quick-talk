import React, { useState } from 'react'
import InputField from '../components/ui/InputField';
import PasswordInputField from '../components/ui/PasswordInputField';
import Checkbox from '../components/ui/Checkbox';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Check, Loader2 } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation functions
  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case "fullName":
      case "lastName":
        return typeof value === "string" && value.length < 2 
          ? "Must be at least 2 characters" 
          : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return typeof value === "string" && !emailRegex.test(value) 
          ? "Please enter a valid email address" 
          : "";
      case "phone":
        const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
        return typeof value === "string" && !phoneRegex.test(value) 
          ? "Please enter a valid phone number" 
          : "";
      case "password":
        if (typeof value === "string") {
          if (value.length < 8) return "Password must be at least 8 characters";
          if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            return "Password must contain uppercase, lowercase, and numbers";
          }
        }
        return "";
      case "confirmPassword":
        return typeof value === "string" && value !== formData.password 
          ? "Passwords do not match" 
          : "";
      case "agreeToTerms":
        return !value ? "You must agree to the Terms of Service" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    
    // Clear error when user starts typing/checking
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    const error = validateField(name, fieldValue);
    
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Register submitted:", formData);
      // Handle successful registration (redirect, show success message, etc.)
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="John"
          error={errors.fullName}
        />
        
        

      {/* Contact Information */}
      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="john.doe@example.com"
        error={errors.email}
      />

    

      {/* Password Fields */}
      <PasswordInputField
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create a strong password"
        error={errors.password}
        showStrength={true}
      />

      <PasswordInputField
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
      />

      {/* Terms and Marketing */}
      <div className="space-y-4">
        <div>
          <Checkbox
            label="I agree to QuickTalk's Terms of Service and Privacy Policy"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          {errors.agreeToTerms && (
            <p className="mt-1 text-sm text-[var(--qt-error)]">
              {errors.agreeToTerms}
            </p>
          )}
          <div className="mt-1 text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <Checkbox
          label="I'd like to receive updates about new features and improvements (optional)"
          name="agreeToMarketing"
          checked={formData.agreeToMarketing}
          onChange={handleChange}
        />
      </div>

      {/* Submit Error */}
      {errors.submit && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-sm text-red-600">{errors.submit}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          <>
            Create Account
            <Check className="w-4 h-4" />
          </>
        )}
      </Button>

      <div className="text-center">
        <span className="text-gray-600 text-sm">Already have an account? </span>
        <Link
          to="/auth/login"
          className="text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Sign in instead
        </Link>
      </div>
    </form>
  );
};

export default Register;