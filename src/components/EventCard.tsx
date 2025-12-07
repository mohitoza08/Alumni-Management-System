import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    speaker: string;
    speakerRole: string;
    speakerAvatar: string;
    registrations: number;
    capacity: number;
    image: string;
  };
  onRegister?: () => void;
  onClick?: () => void;
}

export function EventCard({ event, onRegister, onClick }: EventCardProps) {
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const day = dateObj.getDate();
  
  return (
    <Card hover onClick={onClick} padding="none" className="cursor-pointer overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3 text-center min-w-[60px]">
          <div className="text-[#1E73BE]">{month}</div>
          <div className="text-2xl text-[#333333]">{day}</div>
        </div>
        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-[#1E73BE] text-white px-3 py-1 rounded-full text-sm">
          {event.type}
        </div>
      </div>
      
      <div className="p-6">
        {/* Title */}
        <h4 className="mb-3">{event.title}</h4>
        
        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <Users size={16} />
            <span>{event.registrations} / {event.capacity} registered</span>
          </div>
        </div>
        
        {/* Speaker */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E0E0E0]">
          <img
            src={event.speakerAvatar}
            alt={event.speaker}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-[#333333]">{event.speaker}</p>
            <p className="text-xs text-[#777777]">{event.speakerRole}</p>
          </div>
        </div>
        
        {/* Registration Progress */}
        <div className="mb-4">
          <div className="w-full bg-[#F5F5F7] rounded-full h-2">
            <div
              className="bg-[#36CFC9] h-2 rounded-full"
              style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Action */}
        <Button
          variant="primary"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            onRegister?.();
          }}
        >
          Register Now
        </Button>
      </div>
    </Card>
  );
}
