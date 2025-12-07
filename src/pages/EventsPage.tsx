import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { EventCard } from '../components/EventCard';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
import { mockEvents } from '../utils/mockData';

interface EventsPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('upcoming');
  
  const filters = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'webinars', label: 'Webinars' },
    { id: 'reunions', label: 'Reunions' },
  ];
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Events & Workshops</h1>
          <p className="text-[#777777]">
            Discover and register for alumni networking events, workshops, and reunions
          </p>
        </div>
        
        {/* Featured Event Banner */}
        <Card padding="none" className="mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=800&h=400&fit=crop"
              alt="Featured Event"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-[#FF8C42] text-white rounded-full text-sm w-fit mb-4">
                Featured Event
              </span>
              <h2 className="mb-4">Annual Tech Summit 2024</h2>
              <p className="text-[#555555] mb-4">
                Join us for our biggest event of the year featuring industry leaders, 
                networking opportunities, and cutting-edge technology discussions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-[#777777]">
                  <Calendar size={18} />
                  <span>February 15, 2024 • 10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-[#777777]">
                  <MapPin size={18} />
                  <span>Main Auditorium, University Campus</span>
                </div>
              </div>
              <Button variant="primary" size="lg">
                Register Now
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search events by name, speaker, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={20} />}
                fullWidth
              />
            </div>
            <Button variant="outline" icon={<Filter size={20} />}>
              More Filters
            </Button>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-[#1E73BE] text-white'
                    : 'bg-white text-[#555555] hover:bg-[#F5F5F7]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl text-[#1E73BE] mb-2">24</div>
            <div className="text-[#777777]">Upcoming Events</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#6F57FF] mb-2">156</div>
            <div className="text-[#777777]">Events This Year</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#36CFC9] mb-2">8.5k</div>
            <div className="text-[#777777]">Total Attendees</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#FF8C42] mb-2">4.8</div>
            <div className="text-[#777777]">Avg Rating</div>
          </Card>
        </div>
        
        {/* Events Grid */}
        <div className="mb-6">
          <h3 className="mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => onNavigate('event-detail', event.id)}
              />
            ))}
            {mockEvents.map((event) => (
              <EventCard
                key={`${event.id}-2`}
                event={{ ...event, id: event.id + 10 }}
                onClick={() => onNavigate('event-detail', event.id)}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-br from-[#F5F5F7] to-white">
          <h3 className="mb-4">Want to Host an Event?</h3>
          <p className="text-[#777777] mb-6 max-w-[600px] mx-auto">
            Share your expertise with the community by hosting a workshop, webinar, or networking event
          </p>
          <Button variant="primary" size="lg">
            Propose an Event
          </Button>
        </Card>
      </div>
    </div>
  );
}
