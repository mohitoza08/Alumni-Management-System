import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    onNavigate('dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=600&fit=crop"
            alt="Alumni Network"
            className="rounded-2xl shadow-2xl"
          />
          <div className="mt-8">
            <h2 className="mb-4">Welcome Back!</h2>
            <p className="text-[#777777]">
              Access your alumni network, connect with peers, and explore new opportunities.
            </p>
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <Card className="max-w-[500px] mx-auto w-full">
          <div className="mb-8">
            <h2 className="mb-2">Login to Alumni Connect</h2>
            <p className="text-[#777777]">Enter your credentials to access your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="your.email@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={20} />}
              required
              fullWidth
            />
            
            <div>
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock size={20} />}
                required
                fullWidth
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] text-[#777777] hover:text-[#1E73BE]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#1E73BE] border-[#E0E0E0] rounded focus:ring-2 focus:ring-[#1E73BE]"
                />
                <span className="text-sm text-[#555555]">Remember me</span>
              </label>
              
              <button
                type="button"
                onClick={() => onNavigate('forgot-password')}
                className="text-sm text-[#1E73BE] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Login
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E0E0E0]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#777777]">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" fullWidth>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              
              <Button variant="outline" fullWidth>
                <svg className="w-5 h-5 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </Button>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => onNavigate('otp-login')}
                className="text-sm text-[#1E73BE] hover:underline"
              >
                Login with OTP
              </button>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-[#E0E0E0] text-center">
            <p className="text-[#777777]">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-[#1E73BE] hover:underline"
              >
                Sign Up
              </button>
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="mt-2 text-sm text-[#777777] hover:text-[#1E73BE]"
            >
              Continue as Guest
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
