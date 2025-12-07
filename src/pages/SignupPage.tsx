import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { User, Mail, Lock, Phone, Upload } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: string) => void;
  onSignup: () => void;
}

export function SignupPage({ onNavigate, onSignup }: SignupPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    batch: '',
    department: '',
    role: 'student',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      onSignup();
      onNavigate('otp-verification');
    }
  };
  
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="mb-2">Join Alumni Connect</h2>
          <p className="text-[#777777]">Create your account to start connecting with alumni</p>
        </div>
        
        {/* Progress Steps */}
        <div className="max-w-[600px] mx-auto mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#1E73BE]' : 'text-[#777777]'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#1E73BE] text-white' : 'bg-[#E0E0E0]'}`}>
                1
              </div>
              <span className="hidden sm:inline">Personal Info</span>
            </div>
            <div className="flex-1 h-1 bg-[#E0E0E0]">
              <div className={`h-full ${step >= 2 ? 'bg-[#1E73BE]' : ''} transition-all`} />
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#1E73BE]' : 'text-[#777777]'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#1E73BE] text-white' : 'bg-[#E0E0E0]'}`}>
                2
              </div>
              <span className="hidden sm:inline">Academic Info</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block">
            <Card className="bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white h-full">
              <h3 className="text-white mb-6">Why Join Alumni Connect?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Network with Alumni',
                    description: 'Connect with thousands of alumni across industries and locations',
                  },
                  {
                    title: 'Career Opportunities',
                    description: 'Access exclusive job postings and internship opportunities',
                  },
                  {
                    title: 'Mentorship Programs',
                    description: 'Get guidance from experienced professionals in your field',
                  },
                  {
                    title: 'Events & Workshops',
                    description: 'Attend networking events, workshops, and reunions',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h5 className="text-white mb-1">{benefit.title}</h5>
                      <p className="text-white/80 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Right Side - Form */}
          <Card className="max-w-[600px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <Input
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    icon={<User size={20} />}
                    required
                    fullWidth
                  />
                  
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="your.email@university.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    icon={<Mail size={20} />}
                    required
                    fullWidth
                  />
                  
                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    icon={<Phone size={20} />}
                    required
                    fullWidth
                  />
                  
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    icon={<Lock size={20} />}
                    required
                    fullWidth
                  />
                  
                  <Input
                    type="password"
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    icon={<Lock size={20} />}
                    required
                    fullWidth
                  />
                </>
              )}
              
              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <label className="text-[#333333]">
                      I am a <span className="text-[#F5222D]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['student', 'alumni', 'faculty', 'admin'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => handleInputChange('role', role)}
                          className={`px-6 py-3 rounded-lg border-2 transition-all ${
                            formData.role === role
                              ? 'border-[#1E73BE] bg-[#1E73BE] bg-opacity-10 text-[#1E73BE]'
                              : 'border-[#E0E0E0] hover:border-[#1E73BE]'
                          }`}
                        >
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[#333333]">
                      Department <span className="text-[#F5222D]">*</span>
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE] focus:ring-opacity-20"
                    >
                      <option value="">Select Department</option>
                      <option value="cs">Computer Science</option>
                      <option value="ee">Electrical Engineering</option>
                      <option value="me">Mechanical Engineering</option>
                      <option value="ba">Business Administration</option>
                      <option value="arts">Arts & Humanities</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[#333333]">
                      Batch Year <span className="text-[#F5222D]">*</span>
                    </label>
                    <select
                      value={formData.batch}
                      onChange={(e) => handleInputChange('batch', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE] focus:ring-opacity-20"
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[#333333]">Profile Photo (Optional)</label>
                    <div className="border-2 border-dashed border-[#E0E0E0] rounded-lg p-8 text-center hover:border-[#1E73BE] transition-colors cursor-pointer">
                      <Upload className="mx-auto mb-2 text-[#777777]" size={32} />
                      <p className="text-sm text-[#777777]">Click to upload or drag and drop</p>
                      <p className="text-xs text-[#999999] mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                      className="w-4 h-4 mt-1 text-[#1E73BE] border-[#E0E0E0] rounded focus:ring-2 focus:ring-[#1E73BE]"
                    />
                    <span className="text-sm text-[#555555]">
                      I agree to the{' '}
                      <a href="#" className="text-[#1E73BE] hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-[#1E73BE] hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </>
              )}
              
              <div className="flex gap-4">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                )}
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  {step === 1 ? 'Continue' : 'Create Account'}
                </Button>
              </div>
              
              {step === 1 && (
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E0E0E0]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#777777]">Or sign up with</span>
                  </div>
                </div>
              )}
              
              {step === 1 && (
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
              )}
            </form>
            
            <div className="mt-6 pt-6 border-t border-[#E0E0E0] text-center">
              <p className="text-[#777777]">
                Already have an account?{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-[#1E73BE] hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
