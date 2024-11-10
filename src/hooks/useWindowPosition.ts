import { useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useWindowPosition(initialWidth = 800, initialHeight = 600) {
  const [position, setPosition] = useState<Position>({
    x: Math.max(0, (window.innerWidth - initialWidth) / 2),
    y: Math.max(0, (window.innerHeight - initialHeight) / 4),
    width: initialWidth,
    height: initialHeight
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('window-header')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  }, [position]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(e.clientX - dragStart.x, window.innerWidth - position.width));
      const newY = Math.max(0, Math.min(e.clientY - dragStart.y, window.innerHeight - position.height));
      
      setPosition(prev => ({
        ...prev,
        x: newX,
        y: newY
      }));
    }
  }, [isDragging, dragStart, position.width, position.height]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleResize = useCallback((direction: string, movementX: number, movementY: number) => {
    setPosition(prev => {
      const minWidth = 400;
      const minHeight = 300;
      let newPosition = { ...prev };

      switch (direction) {
        case 'e':
          newPosition.width = Math.max(minWidth, prev.width + movementX);
          break;
        case 's':
          newPosition.height = Math.max(minHeight, prev.height + movementY);
          break;
        case 'se':
          newPosition.width = Math.max(minWidth, prev.width + movementX);
          newPosition.height = Math.max(minHeight, prev.height + movementY);
          break;
      }

      return newPosition;
    });
  }, []);

  return {
    position,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleResize
  };
}