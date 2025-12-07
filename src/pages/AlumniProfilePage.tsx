import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { 
  MapPin, Briefcase, Calendar, Mail, Phone, Linkedin, Twitter, 
  Globe, Award, FileText, Edit, MessageCircle, Video, Share2 
} from 'lucide-react';
import { mockAlumni } from '../utils/mockData';

interface AlumniProfilePageProps {
  alumniId?: number;
  onNavigate: (page: string) => void;
}

export function AlumniProfilePage({ alumniId = 1, onNavigate }: AlumniProfilePageProps) {
  const [activeTab, setActiveTab] = useState('about');
  
  const alumni = mockAlumni.find(a => a.id === alumniId) || mockAlumni[0];
  
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'activity', label: 'Activity' },
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F7] py-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Cover and Profile Header */}
        <Card padding="none" className="mb-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 lg:h-64 bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] relative">
            <img
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200&h=300&fit=crop"
              alt="Cover"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          {/* Profile Info */}
          <div className="px-6 lg:px-8 pb-6">
            <div className="flex flex-col lg:flex-row gap-6 -mt-16 lg:-mt-20">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={alumni.avatar}
                  alt={alumni.name}
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white shadow-lg"
                />
                {alumni.verified && (
                  <div className="absolute bottom-2 right-2">
                    <Badge type="verified" size="lg" showLabel={false} />
                  </div>
                )}
              </div>
              
              <div className="flex-1 pt-4 lg:pt-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2>{alumni.name}</h2>
                      <div className="flex gap-2">
                        {alumni.isMentor && <Badge type="mentor" size="md" />}
                        {alumni.topAlumni && <Badge type="top-alumni" size="md" />}
                      </div>
                    </div>
                    <h4 className="text-[#555555] mb-2">{alumni.role}</h4>
                    <p className="text-[#777777]">{alumni.company}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-[#777777]">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{alumni.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Batch of {alumni.batch}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" icon={<MessageCircle size={20} />}>
                      Message
                    </Button>
                    <Button variant="outline" icon={<Video size={20} />}>
                      Schedule Call
                    </Button>
                    <Button variant="ghost" icon={<Share2 size={20} />}>
                      Share
                    </Button>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#F5F5F7] hover:bg-[#1E73BE] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#F5F5F7] hover:bg-[#1E73BE] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#F5F5F7] hover:bg-[#1E73BE] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Globe size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#F5F5F7] hover:bg-[#1E73BE] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <Card padding="none">
              <div className="border-b border-[#E0E0E0] px-6 flex gap-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-[#1E73BE] text-[#1E73BE]'
                        : 'border-transparent text-[#777777] hover:text-[#333333]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="p-6">
                {activeTab === 'about' && (
                  <div className="space-y-4">
                    <div>
                      <h5 className="mb-2">About</h5>
                      <p className="text-[#555555]">{alumni.bio}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <h5>Work Experience</h5>
                    </div>
                    {alumni.experience?.map((exp, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase size={20} className="text-[#777777]" />
                        </div>
                        <div className="flex-1">
                          <h5>{exp.role}</h5>
                          <p className="text-[#555555]">{exp.company}</p>
                          <p className="text-sm text-[#777777]">{exp.years}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <h5>Education</h5>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award size={20} className="text-[#777777]" />
                      </div>
                      <div className="flex-1">
                        <h5>Bachelor of Science in Computer Science</h5>
                        <p className="text-[#555555]">University Name</p>
                        <p className="text-sm text-[#777777]">2011 - 2015</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div className="space-y-4">
                    <h5>Skills & Expertise</h5>
                    <div className="flex flex-wrap gap-3">
                      {alumni.skills.map((skill, index) => (
                        <div key={index} className="px-4 py-2 bg-[#F5F5F7] rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="text-[#333333]">{skill}</span>
                            <span className="text-xs text-[#777777]">12 endorsements</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    <h5>Recent Activity</h5>
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="pb-4 border-b border-[#E0E0E0] last:border-0">
                        <p className="text-[#555555] mb-2">
                          Posted about React best practices and modern development
                        </p>
                        <p className="text-sm text-[#777777]">{index + 1} days ago</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
            
            {/* Recommendations */}
            <Card>
              <h5 className="mb-4">Recommendations</h5>
              <div className="space-y-6">
                {mockAlumni.slice(1, 3).map((recommender) => (
                  <div key={recommender.id} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={recommender.avatar}
                        alt={recommender.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h6>{recommender.name}</h6>
                        <p className="text-sm text-[#777777]">{recommender.role} at {recommender.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#555555]">
                      "An exceptional professional with deep expertise in software engineering. 
                      {alumni.name} consistently delivers high-quality work and is a great mentor."
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <h5 className="mb-4">Contact Information</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#777777]" />
                  <span className="text-sm text-[#555555]">sarah.j@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#777777]" />
                  <span className="text-sm text-[#555555]">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#777777]" />
                  <span className="text-sm text-[#555555]">{alumni.location}</span>
                </div>
              </div>
            </Card>
            
            {/* Mentorship */}
            {alumni.isMentor && (
              <Card className="bg-gradient-to-br from-[#6F57FF] to-[#5940CC] text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="text-white">Available for Mentorship</h5>
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  {alumni.name} is offering mentorship in their areas of expertise
                </p>
                <Button variant="secondary" fullWidth className="bg-white text-[#6F57FF] hover:bg-white/90">
                  Request Mentorship
                </Button>
              </Card>
            )}
            
            {/* Mutual Connections */}
            <Card>
              <h5 className="mb-4">Mutual Connections</h5>
              <div className="space-y-3">
                {mockAlumni.slice(2, 5).map((connection) => (
                  <div key={connection.id} className="flex items-center gap-3">
                    <img
                      src={connection.avatar}
                      alt={connection.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h6 className="text-sm truncate">{connection.name}</h6>
                      <p className="text-xs text-[#777777] truncate">{connection.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" fullWidth className="mt-4">
                View All Connections
              </Button>
            </Card>
            
            {/* Contributions */}
            <Card>
              <h5 className="mb-4">Contributions</h5>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#555555]">Posts</span>
                    <span className="text-[#1E73BE]">45</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#555555]">Events Hosted</span>
                    <span className="text-[#1E73BE]">8</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#555555]">Mentees</span>
                    <span className="text-[#1E73BE]">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555555]">Jobs Posted</span>
                    <span className="text-[#1E73BE]">6</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Resume Download */}
            <Card>
              <h5 className="mb-4">Documents</h5>
              <Button variant="outline" fullWidth icon={<FileText size={20} />}>
                Download Resume
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
