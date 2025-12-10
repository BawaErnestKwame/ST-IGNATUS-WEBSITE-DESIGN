import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent scroll reset inside About or Services subpages
    if (pathname.startsWith("/about/mission") || pathname.startsWith("/about/awards") || pathname.startsWith("/about/experience")  || pathname.startsWith("/about/success")  || pathname.startsWith('/services/eyeSurgeries')  || pathname.startsWith('/services/refraction')  || pathname.startsWith('/services/dvlEyeTeste')  || pathname.startsWith('/services/institutionalEye')  || pathname.startsWith('/services/comprehensive')  || pathname.startsWith('/services/diagnostics') || pathname.startsWith('/services/contactLenses')) return;

    // Scroll to top for all other pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
