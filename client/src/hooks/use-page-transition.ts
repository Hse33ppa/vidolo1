import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Start transition
    setIsLoading(true);
    setIsVisible(false);

    // Simulate loading and then show content
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);

  return { isLoading, isVisible };
};

export const usePageAnimation = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay + 100);

    return () => clearTimeout(timer);
  }, [location, delay]);

  return isVisible;
};