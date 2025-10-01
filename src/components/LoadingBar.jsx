import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the default NProgress CSS

// Configure NProgress to be fast and subtle
nProgress.configure({ showSpinner: false, speed: 500, minimum: 0.2 });

const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    // Start the progress bar when the location changes (navigation begins)
    nProgress.start();

    // Immediately stop the progress bar once the new component is rendered
    // (This is fast because SPAs load instantly, but it shows the user 'something happened')
    nProgress.done();

    // Clean up function runs when component unmounts or before a new effect runs
    return () => {
      nProgress.done();
    };
  }, [location.pathname]); // Rerun effect when the path changes

  return null;
};

export default LoadingBar;