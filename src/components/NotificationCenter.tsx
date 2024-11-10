import React from 'react';
import { X, Bell } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: Date;
}

interface NotificationCenterProps {
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
  onClose: () => void;
  isDark: boolean;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  setNotifications,
  onClose,
  isDark
}) => {
  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
    onClose();
  };

  return (
    <div
      className={`fixed top-8 right-4 w-80 rounded-lg shadow-lg ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } backdrop-blur-md border border-white/10`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Bell size={16} className={isDark ? 'text-white' : 'text-gray-800'} />
            <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Notifications
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearAll}
              className={`text-xs ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Clear all
            </button>
            <button
              onClick={onClose}
              className={`p-1 rounded-md hover:bg-gray-100/10 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {notifications.length === 0 ? (
            <p className={`text-sm text-center py-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No new notifications
            </p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg ${
                  isDark ? 'bg-gray-700/50' : 'bg-gray-50'
                } relative group`}
              >
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                </button>
                <h4 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {notification.title}
                </h4>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {notification.message}
                </p>
                <span className={`text-xs mt-2 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {notification.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;