import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { MapPin, Briefcase, DollarSign, Bookmark } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    logo: string;
    location: string;
    type: string;
    remote: boolean;
    experience: string;
    salary: string;
    skills: string[];
    postedBy: string;
    postedDate: string;
  };
  onApply?: () => void;
  onSave?: () => void;
  onClick?: () => void;
}

export function JobCard({ job, onApply, onSave, onClick }: JobCardProps) {
  return (
    <Card hover onClick={onClick} className="cursor-pointer">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <img
              src={job.logo}
              alt={job.company}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h4 className="mb-1">{job.title}</h4>
              <p className="text-[#555555]">{job.company}</p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave?.();
            }}
            className="p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors"
          >
            <Bookmark size={20} className="text-[#777777]" />
          </button>
        </div>
        
        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <MapPin size={16} />
            <span>{job.location}</span>
            {job.remote && (
              <span className="px-2 py-0.5 bg-[#36CFC9] bg-opacity-20 text-[#36CFC9] text-xs rounded-full">
                Remote
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <Briefcase size={16} />
            <span>{job.type} • {job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <DollarSign size={16} />
            <span>{job.salary}</span>
          </div>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F5F5F7] text-[#555555] text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E0E0E0]">
          <p className="text-sm text-[#777777]">Posted by {job.postedBy}</p>
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onApply?.();
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
