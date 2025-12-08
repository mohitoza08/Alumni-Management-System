import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { AlumniCard } from '../components/AlumniCard';
import { EventCard } from '../components/EventCard';
import { JobCard } from '../components/JobCard';
import { ChapterCard } from '../components/ChapterCard';
import { Search, ArrowRight, TrendingUp, Users, Briefcase, Award, Calendar } from 'lucide-react';
import { mockAlumni, mockEvents, mockJobs, mockChapters, mockStories, mockStats } from '../utils/mockData';

interface HomePageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Counter animation simulation
  const [counts] = useState({
    alumni: mockStats.alumniRegistered,
    chapters: mockStats.chaptersActive,
    recruiters: mockStats.recruiters,
    mentorship: mockStats.mentorshipHours,
    events: mockStats.eventsCompleted,
  });
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E73BE] via-[#6F57FF] to-[#36CFC9] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-6">
                Connect. Grow. Succeed Together.
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of alumni, students, and faculty in building meaningful connections,
                advancing careers, and giving back to our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onNavigate('signup')}
                  className="bg-white text-[#1E73BE] hover:bg-white/90"
                >
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('directory')}
                  className="border-white text-white hover:bg-white hover:text-[#1E73BE]"
                >
                  Explore Alumni
                </Button>
              </div>
              
              {/* Search Bar */}
              <div className="bg-white rounded-xl p-2 flex items-center gap-2 shadow-lg">
                <Search className="text-[#777777] ml-2" size={20} />
                <input
                  type="text"
                  placeholder="Find alumni by name, skill, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-2 py-3 text-[#333333] outline-none"
                />
                <Button variant="primary" onClick={() => onNavigate('directory')}>
                  Search
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1659080907111-7c726e435a28?w=600&h=500&fit=crop"
                alt="Alumni Network"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats Section */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl text-[#1E73BE] mb-2">
                {counts.alumni.toLocaleString()}+
              </div>
              <div className="text-[#777777]">Alumni Registered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#6F57FF] mb-2">
                {counts.chapters}+
              </div>
              <div className="text-[#777777]">Active Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#36CFC9] mb-2">
                {counts.recruiters}+
              </div>
              <div className="text-[#777777]">Recruiters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#FF8C42] mb-2">
                {counts.mentorship.toLocaleString()}+
              </div>
              <div className="text-[#777777]">Mentorship Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[#52C41A] mb-2">
                {counts.events}+
              </div>
              <div className="text-[#777777]">Events Completed</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Alumni Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Alumni</h2>
              <p className="text-[#777777]">Connect with accomplished alumni from our community</p>
            </div>
            <Button
              variant="ghost"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => onNavigate('directory')}
            >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAlumni.slice(0, 6).map((alumni) => (
              <AlumniCard
                key={alumni.id}
                alumni={alumni}
                onClick={() => onNavigate('profile', alumni.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Chapters Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Alumni Chapters</h2>
              <p className="text-[#777777]">Join chapters based on location or department</p>
            </div>
            <Button
              variant="ghost"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => onNavigate('chapters')}
            >
              View All
            </Button>
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
      </section>
      
      {/* Jobs & Opportunities */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Latest Opportunities</h2>
              <p className="text-[#777777]">Explore jobs posted by alumni and recruiters</p>
            </div>
            <Button
              variant="ghost"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => onNavigate('jobs')}
            >
              View All Jobs
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockJobs.slice(0, 4).map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => onNavigate('job-detail', job.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Upcoming Events</h2>
              <p className="text-[#777777]">Join workshops, reunions, and networking events</p>
            </div>
            <Button
              variant="ghost"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => onNavigate('events')}
            >
              View All Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => onNavigate('event-detail', event.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Success Stories</h2>
              <p className="text-[#777777]">Get inspired by alumni achievements</p>
            </div>
            <Button
              variant="ghost"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => onNavigate('stories')}
            >
              Read More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockStories.map((story) => (
              <Card key={story.id} hover padding="none" className="cursor-pointer overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="mb-2">{story.title}</h4>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={story.authorAvatar}
                      alt={story.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-[#777777]">{story.author}</span>
                  </div>
                  <p className="text-sm text-[#777777] mb-4">{story.excerpt}</p>
                  <Button variant="ghost" size="sm" fullWidth>
                    Read Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F7] to-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Community Says</h2>
            <p className="text-[#777777]">Hear from alumni who have benefited from our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Class of 2015',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                text: 'Alumni Connect helped me find my mentor and land my dream job at Google. The community is incredibly supportive!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Class of 2012',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                text: 'Being part of this platform has allowed me to give back by mentoring students and sharing opportunities.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Class of 2018',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
                text: 'The networking events and chapter meetings have helped me build lasting professional relationships.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h5>{testimonial.name}</h5>
                    <p className="text-sm text-[#777777]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FF8C42]">★</span>
                  ))}
                </div>
                <p className="text-[#555555]">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="mb-4">Partner Companies</h2>
            <p className="text-[#777777]">Alumni working at leading organizations worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 'Netflix'].map((company, index) => (
              <div key={index} className="text-2xl text-[#333333]">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with thousands of alumni and take your career to the next level
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('signup')}
            className="bg-white text-[#1E73BE] hover:bg-white/90"
          >
            Get Started from here
          </Button>
        </div>
      </section>
    </div>
  );
}
