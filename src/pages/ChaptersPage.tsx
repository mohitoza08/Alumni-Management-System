import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ChapterCard } from '../components/ChapterCard';
import { Search, MapPin, Users, TrendingUp } from 'lucide-react';
import { mockChapters } from '../utils/mockData';

interface ChaptersPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function ChaptersPage({ onNavigate }: ChaptersPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Chapters' },
    { id: 'location', label: 'By Location' },
    { id: 'department', label: 'By Department' },
    { id: 'interest', label: 'By Interest' },
  ];
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Alumni Chapters</h1>
          <p className="text-[#777777]">
            Connect with alumni in your region or with shared interests
          </p>
        </div>
        
        {/* Hero Banner */}
        <Card className="mb-8 bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white mb-4">Join Your Local Chapter</h2>
              <p className="text-white/90 mb-6">
                Connect with alumni in your area through local chapters. Attend meetups, 
                networking events, and build lasting relationships.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-[#1E73BE] hover:bg-white/90">
                Find Your Chapter
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?w=600&h=400&fit=crop"
                alt="Chapters"
                className="rounded-xl"
              />
            </div>
          </div>
        </Card>
        
        {/* Search */}
        <Card className="mb-6">
          <Input
            type="text"
            placeholder="Search chapters by name, location, or interest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search size={20} />}
            fullWidth
          />
        </Card>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl text-[#1E73BE] mb-2">45</div>
            <div className="text-sm text-[#777777]">Active Chapters</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#6F57FF] mb-2">12.5k</div>
            <div className="text-sm text-[#777777]">Total Members</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#36CFC9] mb-2">234</div>
            <div className="text-sm text-[#777777]">Events This Year</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#FF8C42] mb-2">28</div>
            <div className="text-sm text-[#777777]">Countries</div>
          </Card>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#1E73BE] text-white'
                  : 'bg-white text-[#555555] hover:bg-[#F5F5F7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Featured Chapters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-[#FF8C42]" />
            <h3>Most Active Chapters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockChapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                onClick={() => onNavigate('chapter-detail', chapter.id)}
              />
            ))}
          </div>
        </div>
        
        {/* Location-Based Chapters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="text-[#1E73BE]" />
            <h3>Chapters by Location</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...mockChapters, ...mockChapters].slice(0, 8).map((chapter, index) => (
              <ChapterCard
                key={`location-${chapter.id}-${index}`}
                chapter={chapter}
                onClick={() => onNavigate('chapter-detail', chapter.id)}
              />
            ))}
          </div>
        </div>
        
        {/* Department-Based Chapters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="text-[#6F57FF]" />
            <h3>Chapters by Department</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockChapters.map((chapter) => (
              <ChapterCard
                key={`dept-${chapter.id}`}
                chapter={{ ...chapter, type: 'Department', name: `${chapter.name} Department` }}
                onClick={() => onNavigate('chapter-detail', chapter.id)}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-br from-[#F5F5F7] to-white">
          <h3 className="mb-4">Want to Start a New Chapter?</h3>
          <p className="text-[#777777] mb-6 max-w-[600px] mx-auto">
            Help grow our community by starting a chapter in your region or around a shared interest
          </p>
          <Button variant="primary" size="lg">
            Propose a Chapter
          </Button>
        </Card>
      </div>
    </div>
  );
}
