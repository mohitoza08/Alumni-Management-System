import React from 'react';
import { Button } from '../components/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[600px] text-center">
        {/* Illustration */}
        <div className="mb-8">
          <div className="text-[120px] lg:text-[180px] leading-none text-[#1E73BE] opacity-20">
            404
          </div>
        </div>
        
        {/* Content */}
        <h1 className="mb-4">Page Not Found</h1>
        <p className="text-xl text-[#777777] mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="primary"
            size="lg"
            icon={<Home size={20} />}
            onClick={() => onNavigate('home')}
          >
            Go Home
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={<Search size={20} />}
            onClick={() => onNavigate('directory')}
          >
            Browse Alumni
          </Button>
        </div>
        
        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h4 className="mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onNavigate('events')}
              className="text-left p-4 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm text-[#333333]">Events</div>
            </button>
            <button
              onClick={() => onNavigate('jobs')}
              className="text-left p-4 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm text-[#333333]">Jobs</div>
            </button>
            <button
              onClick={() => onNavigate('chapters')}
              className="text-left p-4 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm text-[#333333]">Chapters</div>
            </button>
            <button
              onClick={() => onNavigate('stories')}
              className="text-left p-4 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              <div className="text-2xl mb-2">⭐</div>
              <div className="text-sm text-[#333333]">Stories</div>
            </button>
          </div>
        </div>
        
        {/* Help Text */}
        <p className="mt-8 text-sm text-[#777777]">
          Need help? <button onClick={() => onNavigate('contact')} className="text-[#1E73BE] hover:underline">Contact us</button>
        </p>
      </div>
    </div>
  );
}
