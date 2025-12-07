import React, { useState } from 'react';
import { Menu, X, Bell, MessageCircle, User } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  isLoggedIn?: boolean;
  onNavigate: (page: string) => void;
  currentPage?: string;
  userAvatar?: string;
  notificationCount?: number;
}

export function Navigation({ isLoggedIn = false, onNavigate, currentPage = 'home', userAvatar, notificationCount = 0 }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'directory', label: 'Directory' },
    { id: 'events', label: 'Events' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'chapters', label: 'Chapters' },
    { id: 'groups', label: 'Groups' },
    { id: 'stories', label: 'Stories' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] rounded-lg flex items-center justify-center">
              <span className="text-white">AC</span>
            </div>
            <span className="hidden sm:block text-[#333333]">Alumni Connect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[#555555] hover:text-[#1E73BE] transition-colors ${
                  currentPage === item.id ? 'text-[#1E73BE]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => onNavigate('messages')}
                  className="hidden sm:flex relative p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors"
                >
                  <MessageCircle size={20} className="text-[#555555]" />
                </button>
                
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="hidden sm:flex relative p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors"
                >
                  <Bell size={20} className="text-[#555555]" />
                  {notificationCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#F5222D] text-white text-xs rounded-full flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>
                
                <button
                  onClick={() => onNavigate('profile')}
                  className="hidden sm:flex items-center gap-2 p-1 hover:bg-[#F5F5F7] rounded-lg transition-colors"
                >
                  {userAvatar ? (
                    <img src={userAvatar} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 bg-[#1E73BE] rounded-full flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => onNavigate('login')} className="hidden sm:inline-flex">
                  Login
                </Button>
                <Button variant="primary" size="sm" onClick={() => onNavigate('signup')}>
                  Sign Up
                </Button>
              </>
            )}
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E0E0E0]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-[#555555] hover:text-[#1E73BE] hover:bg-[#F5F5F7] rounded-lg transition-colors ${
                    currentPage === item.id ? 'text-[#1E73BE] bg-[#F5F5F7]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {!isLoggedIn && (
                <div className="flex flex-col gap-2 px-4 pt-4 border-t border-[#E0E0E0]">
                  <Button variant="outline" fullWidth onClick={() => { onNavigate('login'); setMobileMenuOpen(false); }}>
                    Login
                  </Button>
                  <Button variant="primary" fullWidth onClick={() => { onNavigate('signup'); setMobileMenuOpen(false); }}>
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
