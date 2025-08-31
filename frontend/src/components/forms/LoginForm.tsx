import React, { useState } from "react";
import Button from "../ui/Button";
import { Check } from "lucide-react";
import Checkbox from "../ui/Checkbox";
import { Link } from "react-router-dom";
import InputField from "../ui/InputField";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Phone email or username"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email or username"
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <div className="flex items-center justify-between text-sm">
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <Link
          to="/auth/forgot-password"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2"
      >
        Sign In
        <Check className="w-4 h-4" />
      </Button>

      <div className="text-center">
        <span className="text-gray-600 text-sm">Don't have an account? </span>
        <Link
          to="/auth/signup"
          className="text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
