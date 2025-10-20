import { useState, useEffect } from 'react';

export const useChapterTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);

  const startTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setDisplayContent(false);
    
    // Wait for fade out
    setTimeout(() => {
      callback();
      // Start fade in
      setTimeout(() => {
        setDisplayContent(true);
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return {
    isTransitioning,
    displayContent,
    startTransition
  };
};