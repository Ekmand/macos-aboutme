import React, { useState } from 'react';
import { ChevronDown, Moon, Sun, Image } from 'lucide-react';

interface TopBarMenuProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  wallpaper: string;
  setWallpaper: (wallpaper: string) => void;
}

const TopBarMenu: React.FC<TopBarMenuProps> = ({ isDark, setIsDark, wallpaper, setWallpaper }) => {
  const [showMenu, setShowMenu] = useState(false);

  const quickWallpapers = [
    {
      name: 'Mountain Lake',
      value: 'bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop)]'
    },
    {
      name: 'Northern Lights',
      value: 'bg-[url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop)]'
    },
    {
      name: 'Ocean Gradient',
      value: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-1 text-white hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
      >
        <span className="text-sm">Quick Settings</span>
        <ChevronDown size={14} />
      </button>

      {showMenu && (
        <div className={`absolute top-full left-0 mt-1 w-64 rounded-lg shadow-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } backdrop-blur-md border border-white/10`}>
          <div className="p-2 space-y-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100/10"
            >
              <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
              {isDark ? <Sun size={16} className="text-white" /> : <Moon size={16} />}
            </button>

            <div className="border-t border-gray-200/10 pt-2">
              <div className="px-3 py-1">
                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Quick Wallpapers
                </span>
              </div>
              {quickWallpapers.map((wp) => (
                <button
                  key={wp.name}
                  onClick={() => setWallpaper(wp.value)}
                  className="w-full flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100/10"
                >
                  <Image size={16} className={isDark ? 'text-white' : 'text-gray-800'} />
                  <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {wp.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;