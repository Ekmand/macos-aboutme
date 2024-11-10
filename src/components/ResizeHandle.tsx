import React, { useState, useCallback } from 'react';

interface ResizeHandleProps {
  direction: string;
  onResize: (direction: string, movementX: number, movementY: number) => void;
  isDark: boolean;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ direction, onResize, isDark }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const handleMouseMove = (e: MouseEvent) => {
      onResize(direction, e.movementX, e.movementY);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [direction, onResize]);

  const getClassName = () => {
    const base = `absolute ${isDark ? 'bg-gray-600' : 'bg-gray-200'} opacity-0 hover:opacity-100 transition-opacity`;
    switch (direction) {
      case 'e':
        return `${base} w-1 h-full right-0 top-0 cursor-e-resize`;
      case 's':
        return `${base} h-1 w-full bottom-0 left-0 cursor-s-resize`;
      case 'se':
        return `${base} w-3 h-3 bottom-0 right-0 cursor-se-resize rounded-bl`;
      default:
        return '';
    }
  };

  return <div className={getClassName()} onMouseDown={handleMouseDown} />;
};

export default ResizeHandle;