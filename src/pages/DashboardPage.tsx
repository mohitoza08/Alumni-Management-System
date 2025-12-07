import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AlumniCard } from '../components/AlumniCard';
import { EventCard } from '../components/EventCard';
import { JobCard } from '../components/JobCard';
import { 
  LayoutDashboard, Users, Calendar, Briefcase, MessageCircle, 
  Settings, LogOut, TrendingUp, Award, Bell, CheckCircle 
} from 'lucide-react';
import { mockAlumni, mockEvents, mockJobs } from '../utils/mockData';

interface DashboardPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [activeSidebar, setActiveSidebar] = React.useState('dashboard');
  
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'directory', label: 'Directory', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'feed', label: 'Feed', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
  const profileCompletion = 75;
  
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white h-screen sticky top-0 border-r border-[#E0E0E0]">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h5 className="truncate">Sarah Johnson</h5>
                <p className="text-sm text-[#777777] truncate">Class of 2015</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSidebar(item.id);
                      if (item.id !== 'dashboard') {
                        onNavigate(item.id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeSidebar === item.id
                        ? 'bg-[#1E73BE] text-white'
                        : 'text-[#555555] hover:bg-[#F5F5F7]'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-[#E0E0E0]">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-[#F5222D] hover:bg-[#F5F5F7] rounded-lg transition-colors">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h2 className="mb-2">Welcome back, Sarah! 👋</h2>
              <p className="text-[#777777]">Here's what's happening in your network</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-[#1E73BE] to-[#155A9C] text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users size={24} />
                  </div>
                </div>
                <div className="text-3xl mb-1">234</div>
                <div className="text-white/80 text-sm">Connections</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#6F57FF] to-[#5940CC] text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                </div>
                <div className="text-3xl mb-1">8</div>
                <div className="text-white/80 text-sm">Events Registered</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#36CFC9] to-[#2BA8A3] text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="text-3xl mb-1">12</div>
                <div className="text-white/80 text-sm">Job Applications</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#FF8C42] to-[#E67830] text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award size={24} />
                  </div>
                </div>
                <div className="text-3xl mb-1">5</div>
                <div className="text-white/80 text-sm">Mentees</div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Profile Completion */}
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="mb-1">Complete Your Profile</h4>
                      <p className="text-sm text-[#777777]">
                        {profileCompletion}% completed
                      </p>
                    </div>
                    <CheckCircle className="text-[#52C41A]" size={24} />
                  </div>
                  
                  <div className="w-full bg-[#F5F5F7] rounded-full h-2 mb-4">
                    <div
                      className="bg-[#52C41A] h-2 rounded-full transition-all"
                      style={{ width: `${profileCompletion}%` }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-[#52C41A]" />
                      <span className="text-[#555555]">Add profile photo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-[#52C41A]" />
                      <span className="text-[#555555]">Complete work experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-[#E0E0E0] rounded-full" />
                      <span className="text-[#777777]">Add skills and endorsements</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-[#E0E0E0] rounded-full" />
                      <span className="text-[#777777]">Upload resume</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    fullWidth
                    className="mt-4"
                    onClick={() => onNavigate('profile')}
                  >
                    Complete Profile
                  </Button>
                </Card>
                
                {/* Recommended Events */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Upcoming Events</h4>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('events')}>
                      View All
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockEvents.slice(0, 2).map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={() => onNavigate('event-detail', event.id)}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Recommended Jobs */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Recommended Jobs</h4>
                    <Button variant="ghost" size="sm" onClick={() => onNavigate('jobs')}>
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {mockJobs.slice(0, 2).map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        onClick={() => onNavigate('job-detail', job.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {/* Notifications */}
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h5>Recent Notifications</h5>
                    <Bell size={20} className="text-[#777777]" />
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        icon: '👥',
                        text: 'Michael Chen accepted your connection request',
                        time: '2 hours ago',
                      },
                      {
                        icon: '📅',
                        text: 'New event: Tech Summit 2024',
                        time: '5 hours ago',
                      },
                      {
                        icon: '💼',
                        text: 'New job posted by Google',
                        time: '1 day ago',
                      },
                      {
                        icon: '✉️',
                        text: 'You have 3 new messages',
                        time: '2 days ago',
                      },
                    ].map((notification, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="text-2xl">{notification.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[#333333]">{notification.text}</p>
                          <p className="text-xs text-[#999999] mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" fullWidth className="mt-4">
                    View All Notifications
                  </Button>
                </Card>
                
                {/* Suggested Connections */}
                <Card>
                  <h5 className="mb-4">People You May Know</h5>
                  <div className="space-y-4">
                    {mockAlumni.slice(0, 3).map((alumni) => (
                      <div key={alumni.id} className="flex gap-3">
                        <img
                          src={alumni.avatar}
                          alt={alumni.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h6 className="text-sm truncate">{alumni.name}</h6>
                          <p className="text-xs text-[#777777] truncate">{alumni.role}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => onNavigate('profile', alumni.id)}
                          >
                            Connect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Quick Actions */}
                <Card>
                  <h5 className="mb-4">Quick Actions</h5>
                  <div className="space-y-2">
                    <Button variant="outline" fullWidth onClick={() => onNavigate('feed')}>
                      Create Post
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => onNavigate('events')}>
                      Find Events
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => onNavigate('jobs')}>
                      Search Jobs
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => onNavigate('directory')}>
                      Browse Alumni
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
