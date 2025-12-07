import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Directory', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Chapters', href: '#' },
    { label: 'Success Stories', href: '#' },
  ];
  
  const resources = [
    { label: 'Help Center', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Support', href: '#' },
  ];
  
  return (
    <footer className="bg-[#333333] text-white mt-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E73BE] to-[#6F57FF] rounded-lg flex items-center justify-center">
                <span>AC</span>
              </div>
              <span>Alumni Connect</span>
            </div>
            <p className="text-[#CCCCCC] mb-4">
              Connecting students, alumni, and faculty to build a stronger community and create lasting relationships.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-[#444444] hover:bg-[#1E73BE] rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#444444] hover:bg-[#1E73BE] rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#444444] hover:bg-[#1E73BE] rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-[#444444] hover:bg-[#1E73BE] rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#CCCCCC] hover:text-[#36CFC9] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#CCCCCC] hover:text-[#36CFC9] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#36CFC9]" />
                <span className="text-[#CCCCCC]">123 University Ave, Campus City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#36CFC9]" />
                <span className="text-[#CCCCCC]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#36CFC9]" />
                <span className="text-[#CCCCCC]">contact@alumniconnect.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#444444] text-center text-[#CCCCCC]">
          <p>&copy; {new Date().getFullYear()} Alumni Connect Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
