import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AlumniDirectoryPage } from './pages/AlumniDirectoryPage';
import { DashboardPage } from './pages/DashboardPage';
import { AlumniProfilePage } from './pages/AlumniProfilePage';
import { EventsPage } from './pages/EventsPage';
import { JobsPage } from './pages/JobsPage';
import { CommunityFeedPage } from './pages/CommunityFeedPage';
import { ChaptersPage } from './pages/ChaptersPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  
  const navigate = (page: string, id?: number) => {
    setCurrentPage(page);
    setSelectedId(id);
    window.scrollTo(0, 0);
  };
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleSignup = () => {
    setIsLoggedIn(true);
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'login':
        return <LoginPage onNavigate={navigate} onLogin={handleLogin} />;
      case 'signup':
        return <SignupPage onNavigate={navigate} onSignup={handleSignup} />;
      case 'directory':
        return <AlumniDirectoryPage onNavigate={navigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={navigate} />;
      case 'profile':
        return <AlumniProfilePage alumniId={selectedId} onNavigate={navigate} />;
      case 'events':
        return <EventsPage onNavigate={navigate} />;
      case 'jobs':
        return <JobsPage onNavigate={navigate} />;
      case 'feed':
        return <CommunityFeedPage onNavigate={navigate} />;
      case 'chapters':
        return <ChaptersPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'stories':
        return <StoriesPage onNavigate={navigate} />;
      case 'groups':
        return <GroupsPage onNavigate={navigate} />;
      case 'design-system':
        return <DesignSystemPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };
  
  const showNavAndFooter = currentPage !== 'dashboard';
  
  return (
    <div className="min-h-screen flex flex-col">
      {showNavAndFooter && (
        <Navigation
          isLoggedIn={isLoggedIn}
          onNavigate={navigate}
          currentPage={currentPage}
          userAvatar={isLoggedIn ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' : undefined}
          notificationCount={3}
        />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      {showNavAndFooter && <Footer />}
    </div>
  );
}

// Additional Pages (Simple implementations)
function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="mb-4">About Alumni Connect</h1>
          <p className="text-xl text-[#777777] max-w-[800px] mx-auto">
            Building bridges between past, present, and future generations of our university community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-[#555555] mb-4">
              Alumni Connect was founded with a simple yet powerful vision: to create a thriving 
              ecosystem where students, alumni, and faculty can connect, collaborate, and grow together.
            </p>
            <p className="text-[#555555]">
              We believe that the strength of our community lies in the relationships we build and 
              maintain throughout our professional journeys.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop"
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Connect',
              description: 'Build meaningful relationships with alumni across the globe',
              icon: '🤝',
            },
            {
              title: 'Grow',
              description: 'Access mentorship, learning opportunities, and career guidance',
              icon: '🌱',
            },
            {
              title: 'Give back',
              description: 'Contribute to the community through mentorship and support',
              icon: '❤️',
            },
          ].map((value, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h4 className="mb-2">{value.title}</h4>
              <p className="text-[#777777]">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white rounded-2xl p-12">
          <h2 className="text-white mb-4">Join Our Growing Community</h2>
          <p className="text-white/90 mb-8 max-w-[600px] mx-auto">
            Be part of a network of over 12,000 alumni making a difference
          </p>
          <button
            onClick={() => onNavigate('signup')}
            className="px-8 py-4 bg-white text-[#1E73BE] rounded-lg hover:bg-white/90 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-xl text-[#777777]">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#333333] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#1E73BE]"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#1E73BE]"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#1E73BE]"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#1E73BE]"
                  />
                </div>
                <button className="w-full px-6 py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155A9C] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h4 className="mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-[#555555]">123 University Ave</p>
                    <p className="text-[#555555]">Campus City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <p className="text-[#555555]">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <p className="text-[#555555]">contact@alumniconnect.edu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h4 className="mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Monday - Friday</span>
                  <span className="text-[#333333]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Saturday</span>
                  <span className="text-[#333333]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Sunday</span>
                  <span className="text-[#333333]">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white rounded-xl p-8">
              <h4 className="text-white mb-4">Quick Support</h4>
              <p className="text-white/90 mb-6">
                Need immediate assistance? Check out our FAQ section or contact support.
              </p>
              <button className="px-6 py-3 bg-white text-[#1E73BE] rounded-lg hover:bg-white/90 transition-colors">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoriesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const stories = [
    {
      id: 1,
      title: 'From Student to Tech Leader',
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800&h=400&fit=crop',
      excerpt: 'How my journey at university shaped my career at Google and helped me become a tech leader...',
      category: 'Career',
    },
    {
      id: 2,
      title: 'Building a Startup After Graduation',
      author: 'James Wilson',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?w=800&h=400&fit=crop',
      excerpt: 'The lessons I learned building TechStart from the ground up with support from our alumni network...',
      category: 'Entrepreneurship',
    },
    {
      id: 3,
      title: 'Breaking into Data Science',
      author: 'Emily Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      image: 'https://images.unsplash.com/photo-1659080907111-7c726e435a28?w=800&h=400&fit=crop',
      excerpt: 'My transition from traditional analytics to machine learning with mentorship from alumni...',
      category: 'Career Change',
    },
  ];
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="mb-4">Success Stories</h1>
          <p className="text-xl text-[#777777]">
            Get inspired by the achievements of our alumni community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...stories, ...stories, ...stories].map((story, index) => (
            <div key={`${story.id}-${index}`} className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#1E73BE] bg-opacity-10 text-[#1E73BE] text-sm rounded-full mb-3">
                  {story.category}
                </span>
                <h4 className="mb-3">{story.title}</h4>
                <div className="flex items-center gap-3 mb-4">
                  <img src={story.authorAvatar} alt={story.author} className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm text-[#777777]">{story.author}</span>
                </div>
                <p className="text-sm text-[#555555] mb-4">{story.excerpt}</p>
                <button className="text-[#1E73BE] hover:underline">Read Full Story →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GroupsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const groups = [
    {
      id: 1,
      name: 'Tech Entrepreneurs',
      members: 543,
      posts: 234,
      image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=400&h=300&fit=crop',
      description: 'For alumni who are building or interested in startups',
    },
    {
      id: 2,
      name: 'Women in Tech',
      members: 789,
      posts: 456,
      image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=400&h=300&fit=crop',
      description: 'Supporting and empowering women in technology careers',
    },
  ];
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h1 className="mb-8">Groups & Communities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...groups, ...groups, ...groups].map((group, index) => (
            <div key={`${group.id}-${index}`} className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-1 transition-transform">
              <img src={group.image} alt={group.name} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h4 className="mb-2">{group.name}</h4>
                <p className="text-sm text-[#777777] mb-4">{group.description}</p>
                <div className="flex items-center justify-between text-sm text-[#555555] mb-4">
                  <span>{group.members} members</span>
                  <span>{group.posts} posts</span>
                </div>
                <button className="w-full px-6 py-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155A9C] transition-colors">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
