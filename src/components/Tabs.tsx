import React from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'default' | 'pills';
}

export function Tabs({ tabs, activeTab, onChange, variant = 'default' }: TabsProps) {
  if (variant === 'pills') {
    return (
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-[#1E73BE] text-white'
                : 'bg-white text-[#555555] hover:bg-[#F5F5F7]'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
  
  return (
    <div className="border-b border-[#E0E0E0] flex gap-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === tab.id
              ? 'border-[#1E73BE] text-[#1E73BE]'
              : 'border-transparent text-[#777777] hover:text-[#333333]'
          }`}
        >
          {tab.icon && <span>{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
