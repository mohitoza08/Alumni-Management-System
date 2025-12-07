import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Users, MapPin } from 'lucide-react';

interface ChapterCardProps {
  chapter: {
    id: number;
    name: string;
    type: string;
    members: number;
    image: string;
    leader: string;
    leaderAvatar: string;
    description: string;
  };
  onJoin?: () => void;
  onClick?: () => void;
}

export function ChapterCard({ chapter, onJoin, onClick }: ChapterCardProps) {
  return (
    <Card hover onClick={onClick} padding="none" className="cursor-pointer overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={chapter.image}
          alt={chapter.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
          {chapter.type}
        </div>
      </div>
      
      <div className="p-6">
        {/* Title */}
        <h4 className="mb-2">{chapter.name}</h4>
        
        {/* Members */}
        <div className="flex items-center gap-2 text-sm text-[#555555] mb-3">
          <Users size={16} />
          <span>{chapter.members.toLocaleString()} members</span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-[#777777] mb-4">{chapter.description}</p>
        
        {/* Leader */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E0E0E0]">
          <img
            src={chapter.leaderAvatar}
            alt={chapter.leader}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-[#777777]">Chapter Leader</p>
            <p className="text-sm text-[#333333]">{chapter.leader}</p>
          </div>
        </div>
        
        {/* Action */}
        <Button
          variant="primary"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            onJoin?.();
          }}
        >
          Join Chapter
        </Button>
      </div>
    </Card>
  );
}
