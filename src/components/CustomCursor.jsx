import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.interactive-node') ||
        e.target.closest('.glass-panel-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out rounded-full border border-[#5BC0EB]/60 mix-blend-screen"
        style={{
          width: isHovered ? '48px' : '24px',
          height: isHovered ? '48px' : '24px',
          transform: `translate(${position.x - (isHovered ? 24 : 12)}px, ${position.y - (isHovered ? 24 : 12)}px)`,
          backgroundColor: isHovered ? 'rgba(91, 192, 235, 0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(91, 192, 235, 0.4)' : 'none'
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#5BC0EB]"
        style={{
          width: '4px',
          height: '4px',
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`
        }}
      />
    </>
  );
}
