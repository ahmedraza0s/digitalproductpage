import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    
    // Also scroll on next tick to ensure DOM has updated and React Router hasn't restored scroll
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
