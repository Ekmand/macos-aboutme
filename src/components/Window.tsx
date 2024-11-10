import React, { useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { useWindowPosition } from '../hooks/useWindowPosition';
import ResizeHandle from './ResizeHandle';

interface WindowProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  isDark: boolean;
}

const Window: React.FC<WindowProps> = ({ children, title, onClose, isDark }) => {
  const {
    position,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleResize
  } = useWindowPosition();

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      className={`fixed rounded-lg shadow-2xl ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
      style={{
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.2s',
      }}
    >
      <div
        className={`window-header flex items-center p-3 border-b cursor-move ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex space-x-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className={`flex-1 text-center text-sm font-medium ${
          isDark ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {title}
        </span>
      </div>
      <div className="p-6 max-h-[calc(100%-3rem)] overflow-y-auto">
        {children}
      </div>

      <ResizeHandle direction="e" onResize={handleResize} isDark={isDark} />
      <ResizeHandle direction="s" onResize={handleResize} isDark={isDark} />
      <ResizeHandle direction="se" onResize={handleResize} isDark={isDark} />
    </div>
  );
};

export default Window;