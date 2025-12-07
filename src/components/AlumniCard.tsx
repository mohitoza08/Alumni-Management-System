import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { MessageCircle, Calendar } from 'lucide-react';

interface AlumniCardProps {
  alumni: {
    id: number;
    name: string;
    batch: string;
    role: string;
    company: string;
    location: string;
    avatar: string;
    skills: string[];
    verified: boolean;
    isMentor: boolean;
    topAlumni: boolean;
  };
  onConnect?: () => void;
  onMessage?: () => void;
  onSchedule?: () => void;
  onClick?: () => void;
}

export function AlumniCard({ alumni, onConnect, onMessage, onSchedule, onClick }: AlumniCardProps) {
  return (
    <Card hover onClick={onClick} className="cursor-pointer">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <img
            src={alumni.avatar}
            alt={alumni.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="truncate">{alumni.name}</h4>
              {alumni.verified && <Badge type="verified" size="sm" showLabel={false} />}
            </div>
            <p className="text-[#555555] text-sm">{alumni.role}</p>
            <p className="text-[#777777] text-sm">{alumni.company}</p>
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {alumni.isMentor && <Badge type="mentor" size="sm" />}
          {alumni.topAlumni && <Badge type="top-alumni" size="sm" />}
        </div>
        
        {/* Details */}
        <div className="space-y-2">
          <p className="text-sm text-[#777777]">Batch of {alumni.batch}</p>
          <p className="text-sm text-[#777777]">{alumni.location}</p>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {alumni.skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F5F5F7] text-[#555555] text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E0E0E0]">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onConnect?.();
            }}
          >
            Connect
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<MessageCircle size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              onMessage?.();
            }}
          >
            Message
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<Calendar size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              onSchedule?.();
            }}
          >
            Schedule
          </Button>
        </div>
      </div>
    </Card>
  );
}
