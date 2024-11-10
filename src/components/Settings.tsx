import React from 'react';
import { Moon, Sun, Globe, Bell, Shield, Palette, Image } from 'lucide-react';

interface SettingsProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  wallpaper: string;
  setWallpaper: (wallpaper: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ isDark, setIsDark, wallpaper, setWallpaper }) => {
  const wallpapers = [
    { 
      id: 'default',
      name: 'Default Blue',
      value: 'bg-[#a8c0ff]',
      preview: 'bg-[#a8c0ff]'
    },
    {
      id: 'gradient1',
      name: 'Sunset Gradient',
      value: 'bg-gradient-to-r from-orange-500 to-pink-500',
      preview: 'bg-gradient-to-r from-orange-500 to-pink-500'
    },
    {
      id: 'gradient2',
      name: 'Ocean Breeze',
      value: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      preview: 'bg-gradient-to-r from-cyan-500 to-blue-500'
    },
    {
      id: 'image1',
      name: 'Mountain Lake',
      value: 'bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop)]',
      preview: 'bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop)]'
    },
    {
      id: 'image2',
      name: 'Northern Lights',
      value: 'bg-[url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop)]',
      preview: 'bg-[url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop)]'
    }
  ];

  const settings = [
    {
      icon: isDark ? <Sun /> : <Moon />,
      title: 'Appearance',
      description: 'Toggle between light and dark mode',
      action: (
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
            isDark ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isDark ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      )
    },
    {
      icon: <Globe />,
      title: 'Language',
      description: 'Choose your preferred language',
      action: (
        <select
          className={`rounded-md border px-3 py-1 ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          }`}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      )
    },
    {
      icon: <Bell />,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      action: (
        <button
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
            isDark ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
        </button>
      )
    }
  ];

  return (
    <div className={`space-y-8 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
      <div className="space-y-6">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                {setting.icon}
              </div>
              <div>
                <h3 className="font-medium">{setting.title}</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {setting.description}
                </p>
              </div>
            </div>
            {setting.action}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-lg ${
            isDark ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <Image />
          </div>
          <div>
            <h3 className="font-medium">Wallpaper</h3>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Choose your desktop background
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {wallpapers.map((wp) => (
            <button
              key={wp.id}
              onClick={() => setWallpaper(wp.value)}
              className={`relative group overflow-hidden rounded-lg h-24 ${wp.preview} ${
                wallpaper === wp.value ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {wp.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;