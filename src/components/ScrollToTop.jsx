// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  // useEffect runs every time the component mounts or 'pathname' changes
  useEffect(() => {
    // Scroll to the top-left corner of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: rerun effect when pathname changes

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;