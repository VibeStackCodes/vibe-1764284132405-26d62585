import React from 'react';

interface AnimationProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const Animation: React.FC<AnimationProps> = ({ children, isVisible }) => {
  return (
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{children}</div>
  );
};

export default Animation;
