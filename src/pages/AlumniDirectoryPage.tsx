import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { AlumniCard } from '../components/AlumniCard';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { mockAlumni } from '../utils/mockData';

interface AlumniDirectoryPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function AlumniDirectoryPage({ onNavigate }: AlumniDirectoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    department: '',
    batch: '',
    company: '',
    location: '',
    skills: '',
    experience: '',
    mentor: false,
    verified: false,
  });
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Alumni Directory</h1>
          <p className="text-[#777777]">
            Browse and connect with {mockAlumni.length.toLocaleString()}+ alumni from our community
          </p>
        </div>
        
        {/* Search and Controls */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search by name, company, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={20} />}
                fullWidth
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                icon={<Filter size={20} />}
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>
              
              <div className="flex gap-1 border border-[#E0E0E0] rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#1E73BE] text-white' : 'text-[#777777]'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#1E73BE] text-white' : 'text-[#777777]'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <Card className="w-full md:w-80 h-fit sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h4>Filters</h4>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden p-1 hover:bg-[#F5F5F7] rounded"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Department</label>
                  <select
                    value={filters.department}
                    onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE]"
                  >
                    <option value="">All Departments</option>
                    <option value="cs">Computer Science</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="ba">Business Administration</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Batch Year</label>
                  <select
                    value={filters.batch}
                    onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE]"
                  >
                    <option value="">All Years</option>
                    {Array.from({ length: 20 }, (_, i) => 2024 - i).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Company</label>
                  <Input
                    type="text"
                    placeholder="e.g. Google"
                    value={filters.company}
                    onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                    fullWidth
                  />
                </div>
                
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Location</label>
                  <Input
                    type="text"
                    placeholder="e.g. San Francisco"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    fullWidth
                  />
                </div>
                
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Skills</label>
                  <Input
                    type="text"
                    placeholder="e.g. React, Python"
                    value={filters.skills}
                    onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
                    fullWidth
                  />
                </div>
                
                <div>
                  <label className="text-sm text-[#333333] mb-2 block">Experience Level</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg bg-white text-[#333333] focus:outline-none focus:border-[#1E73BE]"
                  >
                    <option value="">All Levels</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior (6-10 years)</option>
                    <option value="lead">Lead/Principal (10+ years)</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.mentor}
                      onChange={(e) => setFilters({ ...filters, mentor: e.target.checked })}
                      className="w-4 h-4 text-[#1E73BE] border-[#E0E0E0] rounded focus:ring-2 focus:ring-[#1E73BE]"
                    />
                    <span className="text-sm text-[#555555]">Available for Mentorship</span>
                  </label>
                  
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                      className="w-4 h-4 text-[#1E73BE] border-[#E0E0E0] rounded focus:ring-2 focus:ring-[#1E73BE]"
                    />
                    <span className="text-sm text-[#555555]">Verified Alumni Only</span>
                  </label>
                </div>
                
                <div className="pt-4 border-t border-[#E0E0E0] space-y-2">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {}}
                  >
                    Apply Filters
                  </Button>
                  <Button
                    variant="ghost"
                    fullWidth
                    onClick={() => setFilters({
                      department: '',
                      batch: '',
                      company: '',
                      location: '',
                      skills: '',
                      experience: '',
                      mentor: false,
                      verified: false,
                    })}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </Card>
          )}
          
          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#555555]">
                Showing {mockAlumni.length} results
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#777777]">Sort by:</span>
                <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg bg-white text-sm text-[#333333] focus:outline-none focus:border-[#1E73BE]">
                  <option>Most Relevant</option>
                  <option>Name (A-Z)</option>
                  <option>Batch Year (Newest)</option>
                  <option>Batch Year (Oldest)</option>
                  <option>Most Active</option>
                </select>
              </div>
            </div>
            
            {/* Alumni Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockAlumni.map((alumni) => (
                  <AlumniCard
                    key={alumni.id}
                    alumni={alumni}
                    onClick={() => onNavigate('profile', alumni.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {mockAlumni.map((alumni) => (
                  <Card key={alumni.id} hover className="cursor-pointer" onClick={() => onNavigate('profile', alumni.id)}>
                    <div className="flex items-center gap-6">
                      <img
                        src={alumni.avatar}
                        alt={alumni.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="mb-1">{alumni.name}</h4>
                        <p className="text-[#555555]">{alumni.role} at {alumni.company}</p>
                        <p className="text-sm text-[#777777]">Batch of {alumni.batch} • {alumni.location}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {alumni.skills.slice(0, 4).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#F5F5F7] text-[#555555] text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="hidden lg:flex gap-2">
                        <Button variant="outline" size="sm">Connect</Button>
                        <Button variant="ghost" size="sm">Message</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
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
      </div>
    </div>
  );
}
