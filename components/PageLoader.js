'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // ==========================================
  // 1. FIRST PAGE LOAD — 1.5s loader
  // ==========================================
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      setIsFirstLoad(false);
      document.body.style.overflow = '';
      setTimeout(() => setHidden(true), 600);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // ==========================================
  // 2. LINK CLICK DETECT — loader show karo
  // ==========================================
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Sirf internal links
      if (!href.startsWith('/')) return;
      if (href.startsWith('//')) return;

      // Agar same page pe ja rahe ho, skip karo
      const cleanHref = href.split('#')[0];
      if (cleanHref === pathname) return;

      // Loader show karo
      setHidden(false);
      setLoading(true);
      document.body.style.overflow = 'hidden';
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  // ==========================================
  // 3. ROUTE CHANGE DETECT — loader hide karo
  // ==========================================
  useEffect(() => {
    if (isFirstLoad) return;
    if (pathname === prevPathname) return;

    // Route change ho gaya — 500ms aur dikhao phir fade
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      setTimeout(() => setHidden(true), 600);
      setPrevPathname(pathname);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, prevPathname, isFirstLoad]);

  if (hidden && !loading) return null;

  return (
    <div className={`page-loader ${loading ? 'active' : 'fade-out'}`}>
      <Loader />
    </div>
  );
}