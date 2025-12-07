import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { PostCard } from '../components/PostCard';
import { Image, Video, FileText, Smile, TrendingUp } from 'lucide-react';
import { mockPosts, mockAlumni } from '../utils/mockData';

interface CommunityFeedPageProps {
  onNavigate: (page: string) => void;
}

export function CommunityFeedPage({ onNavigate }: CommunityFeedPageProps) {
  const [postContent, setPostContent] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'connections', label: 'Connections' },
    { id: 'trending', label: 'Trending' },
    { id: 'jobs', label: 'Job Posts' },
    { id: 'questions', label: 'Questions' },
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F7] py-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Summary */}
            <Card>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="mb-1">Sarah Johnson</h5>
                <p className="text-sm text-[#777777] mb-4">Senior Software Engineer at Google</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E0E0E0]">
                  <div>
                    <div className="text-xl text-[#1E73BE]">234</div>
                    <div className="text-xs text-[#777777]">Connections</div>
                  </div>
                  <div>
                    <div className="text-xl text-[#6F57FF]">45</div>
                    <div className="text-xs text-[#777777]">Posts</div>
                  </div>
                </div>
                <Button variant="outline" fullWidth className="mt-4" onClick={() => onNavigate('profile')}>
                  View Profile
                </Button>
              </div>
            </Card>
            
            {/* Quick Links */}
            <Card>
              <h5 className="mb-4">Quick Links</h5>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors text-[#555555]">
                  My Connections
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors text-[#555555]">
                  Saved Posts
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors text-[#555555]">
                  Groups
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors text-[#555555]">
                  Events
                </button>
              </div>
            </Card>
            
            {/* Trending Topics */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-[#1E73BE]" />
                <h5>Trending Topics</h5>
              </div>
              <div className="space-y-3">
                {[
                  { tag: '#TechCareers', posts: '234 posts' },
                  { tag: '#AlumniMeetup', posts: '156 posts' },
                  { tag: '#CareerAdvice', posts: '89 posts' },
                  { tag: '#Networking', posts: '67 posts' },
                ].map((topic, index) => (
                  <button
                    key={index}
                    className="w-full text-left hover:bg-[#F5F5F7] p-2 rounded-lg transition-colors"
                  >
                    <div className="text-[#1E73BE]">{topic.tag}</div>
                    <div className="text-xs text-[#777777]">{topic.posts}</div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <div className="flex gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <input
                  type="text"
                  placeholder="Share your thoughts with the community..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="flex-1 px-4 py-3 border border-[#E0E0E0] rounded-lg bg-[#F5F5F7] text-[#333333] placeholder:text-[#777777] focus:outline-none focus:border-[#1E73BE] focus:bg-white"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#E0E0E0]">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#1E73BE] transition-colors">
                    <Image size={20} />
                    <span className="hidden sm:inline">Photo</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#1E73BE] transition-colors">
                    <Video size={20} />
                    <span className="hidden sm:inline">Video</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#1E73BE] transition-colors">
                    <FileText size={20} />
                    <span className="hidden sm:inline">Article</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#1E73BE] transition-colors">
                    <Smile size={20} />
                    <span className="hidden sm:inline">Poll</span>
                  </button>
                </div>
                <Button variant="primary" size="sm">
                  Post
                </Button>
              </div>
            </Card>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-white text-[#1E73BE] shadow-sm'
                      : 'text-[#555555] hover:bg-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            {/* Posts */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
              {mockPosts.map((post) => (
                <PostCard key={`${post.id}-2`} post={post} />
              ))}
              {mockPosts.map((post) => (
                <PostCard key={`${post.id}-3`} post={post} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center py-6">
              <Button variant="outline">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
