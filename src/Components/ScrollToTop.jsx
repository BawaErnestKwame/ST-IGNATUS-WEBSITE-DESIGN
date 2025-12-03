import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent scroll reset inside About or Services subpages
    if (pathname.startsWith('/about') || pathname.startsWith('/services')) return;

    // Scroll to top for all other pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
