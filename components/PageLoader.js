'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';

      // Hero aur baaki components ko signal bhejo
      window.dispatchEvent(new Event('pageLoaded'));

      setTimeout(() => setHidden(true), 600);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`page-loader ${loading ? 'active' : 'fade-out'}`}>
      <Loader />
    </div>
  );
}