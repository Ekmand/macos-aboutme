import React from 'react';

interface DockProps {
  apps: Array<{
    id: string;
    icon: React.ReactNode;
    title: string;
  }>;
  activeWindow: string | null;
  setActiveWindow: (id: string) => void;
  isDark: boolean;
}

const Dock: React.FC<DockProps> = ({ apps, activeWindow, setActiveWindow, isDark }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className={`flex items-end space-x-2 px-4 py-2 rounded-2xl backdrop-blur-xl ${
        isDark ? 'bg-white/10' : 'bg-black/10'
      }`}>
        {apps.map(({ id, icon, title }) => (
          <button
            key={id}
            onClick={() => setActiveWindow(id)}
            className={`group relative transition-all duration-150 ${
              activeWindow === id ? 'scale-110' : 'hover:scale-105'
            }`}
          >
            <div className={`p-2 rounded-xl ${
              isDark ? 'bg-gray-800 text-white' : 'bg-white/80 text-gray-800'
            } backdrop-blur-md shadow-lg`}>
              {icon}
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black/75 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {title}
            </span>
            {activeWindow === id && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dock;