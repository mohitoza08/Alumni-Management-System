import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { ProgressBar } from '../components/ProgressBar';
import { Tabs } from '../components/Tabs';
import { Dropdown } from '../components/Dropdown';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import { Skeleton, SkeletonCard } from '../components/Skeleton';
import { 
  Home, Search, Bell, Settings, Heart, Star, 
  CheckCircle, AlertCircle 
} from 'lucide-react';

export function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  
  return (
    <div className="min-h-screen bg-[#F5F5F7] py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h1 className="mb-4">Alumni Connect Design System</h1>
          <p className="text-xl text-[#777777]">
            Complete component library and design guidelines
          </p>
        </div>
        
        {/* Navigation */}
        <div className="mb-8">
          <Tabs
            tabs={[
              { id: 'buttons', label: 'Buttons' },
              { id: 'inputs', label: 'Inputs' },
              { id: 'cards', label: 'Cards' },
              { id: 'badges', label: 'Badges' },
              { id: 'avatars', label: 'Avatars' },
              { id: 'feedback', label: 'Feedback' },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant="pills"
          />
        </div>
        
        {/* Colors */}
        <section className="mb-12">
          <Card>
            <h2 className="mb-6">Color System</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="w-full h-24 bg-[#1E73BE] rounded-lg mb-3"></div>
                <p>Primary</p>
                <p className="text-sm text-[#777777]">#1E73BE</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#6F57FF] rounded-lg mb-3"></div>
                <p>Secondary</p>
                <p className="text-sm text-[#777777]">#6F57FF</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#36CFC9] rounded-lg mb-3"></div>
                <p>Accent</p>
                <p className="text-sm text-[#777777]">#36CFC9</p>
              </div>
              <div>
                <div className="w-full h-24 bg-[#FF8C42] rounded-lg mb-3"></div>
                <p>Accent Alt</p>
                <p className="text-sm text-[#777777]">#FF8C42</p>
              </div>
            </div>
          </Card>
        </section>
        
        {activeTab === 'buttons' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Buttons with Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon={<Home size={20} />}>
                  Home
                </Button>
                <Button variant="outline" icon={<Search size={20} />}>
                  Search
                </Button>
                <Button variant="ghost" icon={<Bell size={20} />} iconPosition="right">
                  Notifications
                </Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </Card>
          </section>
        )}
        
        {activeTab === 'inputs' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Input Fields</h3>
              <div className="space-y-4 max-w-md">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  fullWidth
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  icon={<Search size={20} />}
                  fullWidth
                />
                <Input
                  label="Error State"
                  placeholder="Enter value"
                  error="This field is required"
                  fullWidth
                />
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Dropdown</h3>
              <div className="max-w-md">
                <Dropdown
                  label="Select an option"
                  options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' },
                  ]}
                  value={dropdownValue}
                  onChange={setDropdownValue}
                  fullWidth
                />
              </div>
            </Card>
          </section>
        )}
        
        {activeTab === 'cards' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Card Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h4 className="mb-2">Default Card</h4>
                  <p className="text-[#777777]">
                    This is a basic card with default padding and styling.
                  </p>
                </Card>
                
                <Card hover>
                  <h4 className="mb-2">Hoverable Card</h4>
                  <p className="text-[#777777]">
                    This card has hover effects with elevation.
                  </p>
                </Card>
                
                <Card className="bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] text-white">
                  <h4 className="text-white mb-2">Gradient Card</h4>
                  <p className="text-white/90">
                    This card has a custom gradient background.
                  </p>
                </Card>
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Loading State</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            </Card>
          </section>
        )}
        
        {activeTab === 'badges' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Badge Types</h3>
              <div className="flex flex-wrap gap-4">
                <Badge type="verified" />
                <Badge type="mentor" />
                <Badge type="top-alumni" />
                <Badge type="active" />
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Badge Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Badge type="verified" size="sm" />
                <Badge type="verified" size="md" />
                <Badge type="verified" size="lg" />
              </div>
            </Card>
          </section>
        )}
        
        {activeTab === 'avatars' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Avatar Sizes</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="xs"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="sm"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="md"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="lg"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="xl"
                />
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Avatar with Status</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  size="lg"
                  status="online"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                  size="lg"
                  status="away"
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
                  size="lg"
                  status="busy"
                />
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Avatar with Initials</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar initials="SJ" size="lg" />
                <Avatar initials="MC" size="lg" />
                <Avatar initials="ER" size="lg" />
              </div>
            </Card>
          </section>
        )}
        
        {activeTab === 'feedback' && (
          <section className="space-y-8">
            <Card>
              <h3 className="mb-6">Progress Bars</h3>
              <div className="space-y-6">
                <ProgressBar value={75} showLabel />
                <ProgressBar value={45} color="#6F57FF" showLabel />
                <ProgressBar value={90} color="#52C41A" showLabel />
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Modals</h3>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Open Modal
              </Button>
            </Card>
            
            <Card>
              <h3 className="mb-6">Toast Notifications</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" onClick={() => setShowToast(true)}>
                  Show Toast
                </Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="mb-6">Icons</h3>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Home size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Home</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Search size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Search</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Bell size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Bell</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Settings size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Settings</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Heart size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Heart</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center mb-2">
                    <Star size={24} className="text-[#1E73BE]" />
                  </div>
                  <p className="text-sm text-[#777777]">Star</p>
                </div>
              </div>
            </Card>
          </section>
        )}
      </div>
      
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Example Modal"
      >
        <div className="space-y-4">
          <p className="text-[#555555]">
            This is an example modal component. It can be used for forms, confirmations, 
            or any other content that needs to be displayed in an overlay.
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="primary" fullWidth>
              Confirm
            </Button>
            <Button variant="outline" fullWidth onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      
      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50">
          <Toast
            type="success"
            message="This is a success toast notification!"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  );
}
