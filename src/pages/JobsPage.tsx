import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { JobCard } from '../components/JobCard';
import { Search, Filter, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { mockJobs } from '../utils/mockData';

interface JobsPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function JobsPage({ onNavigate }: JobsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    experience: '',
    remote: false,
    salary: '',
  });
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Job Opportunities</h1>
          <p className="text-[#777777]">
            Explore exclusive job openings posted by alumni and partner companies
          </p>
        </div>
        
        {/* Search and Filters */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search by job title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={20} />}
                fullWidth
              />
            </div>
            <Button
              variant="outline"
              icon={<Filter size={20} />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </Button>
            <Button variant="primary">
              Post a Job
            </Button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#E0E0E0]">
              <div>
                <label className="text-sm text-[#333333] mb-2 block">Job Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE]"
                >
                  <option value="">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm text-[#333333] mb-2 block">Location</label>
                <Input
                  type="text"
                  placeholder="City or State"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  fullWidth
                />
              </div>
              
              <div>
                <label className="text-sm text-[#333333] mb-2 block">Experience</label>
                <select
                  value={filters.experience}
                  onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE]"
                >
                  <option value="">All Levels</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.remote}
                    onChange={(e) => setFilters({ ...filters, remote: e.target.checked })}
                    className="w-4 h-4 text-[#1E73BE] border-[#E0E0E0] rounded focus:ring-2 focus:ring-[#1E73BE]"
                  />
                  <span className="text-sm text-[#555555]">Remote Only</span>
                </label>
              </div>
            </div>
          )}
        </Card>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl text-[#1E73BE] mb-2">432</div>
            <div className="text-sm text-[#777777]">Active Jobs</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#6F57FF] mb-2">156</div>
            <div className="text-sm text-[#777777]">Companies Hiring</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#36CFC9] mb-2">2.3k</div>
            <div className="text-sm text-[#777777]">Applications</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl text-[#FF8C42] mb-2">89%</div>
            <div className="text-sm text-[#777777]">Success Rate</div>
          </Card>
        </div>
        
        <div className="flex gap-6">
          {/* Jobs List */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h4>Showing {mockJobs.length * 4} jobs</h4>
              <select className="px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-sm text-[#333333] focus:outline-none focus:border-[#1E73BE]">
                <option>Most Recent</option>
                <option>Most Relevant</option>
                <option>Salary (High to Low)</option>
                <option>Salary (Low to High)</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[...mockJobs, ...mockJobs, ...mockJobs, ...mockJobs].map((job, index) => (
                <JobCard
                  key={`${job.id}-${index}`}
                  job={job}
                  onClick={() => onNavigate('job-detail', job.id)}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-6">
              <Button variant="outline" size="sm">Previous</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'primary' : 'outline'}
                  size="sm"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <Card className="mt-8 text-center bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white">
          <h3 className="text-white mb-4">Looking to Hire?</h3>
          <p className="text-white/90 mb-6 max-w-[600px] mx-auto">
            Post your job openings and connect with talented alumni from our community
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-[#1E73BE] hover:bg-white/90">
            Post a Job
          </Button>
        </Card>
      </div>
    </div>
  );
}
