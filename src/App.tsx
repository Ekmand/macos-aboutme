import React, { useState, useEffect } from 'react';
import { Monitor, User, Briefcase, Mail, Settings, Bell, ChevronDown, Moon, Sun } from 'lucide-react';
import Window from './components/Window';
import Dock from './components/Dock';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SettingsPanel from './components/Settings';
import TopBarMenu from './components/TopBarMenu';
import NotificationCenter from './components/NotificationCenter';

function App() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [wallpaper, setWallpaper] = useState('bg-[url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop)]');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome!', message: 'Thanks for visiting my portfolio.', time: new Date() },
    { id: 2, title: 'Tip', message: 'Try dark mode for a different experience.', time: new Date() }
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'about', icon: <User size={32} />, title: 'About Me', component: AboutMe },
    { id: 'portfolio', icon: <Briefcase size={32} />, title: 'Portfolio', component: Portfolio },
    { id: 'contact', icon: <Mail size={32} />, title: 'Contact', component: Contact },
    { id: 'settings', icon: <Settings size={32} />, title: 'Settings', component: SettingsPanel }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 bg-cover bg-center ${wallpaper} ${isDark ? 'brightness-[0.7]' : ''}`}>
      <div className="fixed top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 z-10">
        <div className="flex items-center space-x-4">
          <Monitor className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-medium">Ethan Dutson</span>
          <TopBarMenu isDark={isDark} setIsDark={setIsDark} wallpaper={wallpaper} setWallpaper={setWallpaper} />
        </div>

        <div className="flex items-center space-x-6 text-white">
          <span className="text-sm">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="text-sm">
            {currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}
          </span>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative hover:bg-white/10 p-1 rounded-md transition-colors"
          >
            <Bell size={16} />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {showNotifications && (
        <NotificationCenter
          notifications={notifications}
          setNotifications={setNotifications}
          onClose={() => setShowNotifications(false)}
          isDark={isDark}
        />
      )}

      <div className="pt-8 p-4 h-screen">
        {apps.map(({ id, title, component: Component }) => (
          activeWindow === id && (
            <Window 
              key={id}
              title={title}
              onClose={() => setActiveWindow(null)}
              isDark={isDark}
            >
              <Component isDark={isDark} setIsDark={setIsDark} wallpaper={wallpaper} setWallpaper={setWallpaper} />
            </Window>
          )
        ))}
      </div>

      <Dock 
        apps={apps}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        isDark={isDark}
      />
    </div>
  );
}

export default App;