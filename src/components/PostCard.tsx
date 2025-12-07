import React from 'react';
import { Card } from './Card';
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostCardProps {
  post: {
    id: number;
    author: string;
    authorRole: string;
    authorAvatar: string;
    timestamp: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    type: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h5 className="text-[#333333]">{post.author}</h5>
            <p className="text-sm text-[#777777]">{post.authorRole}</p>
            <p className="text-xs text-[#999999]">{post.timestamp}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors">
          <Bookmark size={20} className="text-[#777777]" />
        </button>
      </div>
      
      {/* Content */}
      <p className="text-[#333333] mb-4">{post.content}</p>
      
      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="w-full rounded-lg mb-4"
        />
      )}
      
      {/* Engagement Stats */}
      <div className="flex items-center justify-between text-sm text-[#777777] mb-4 pb-4 border-b border-[#E0E0E0]">
        <span>{post.likes} likes</span>
        <div className="flex gap-4">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="grid grid-cols-3 gap-2">
        <button className="flex items-center justify-center gap-2 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors">
          <ThumbsUp size={18} className="text-[#777777]" />
          <span className="text-sm text-[#555555]">Like</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors">
          <MessageCircle size={18} className="text-[#777777]" />
          <span className="text-sm text-[#555555]">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-2 hover:bg-[#F5F5F7] rounded-lg transition-colors">
          <Share2 size={18} className="text-[#777777]" />
          <span className="text-sm text-[#555555]">Share</span>
        </button>
      </div>
    </Card>
  );
}
