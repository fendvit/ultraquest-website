import { useEffect, useState } from 'react';

const QUERY = '(min-width: 768px)';

/**
 * Phones get a shorter, tighter version of the page: one phone mockup instead of
 * two, and condensed copy. Both are switched here rather than with `hidden`
 * classes — a Swiper initialised inside a display:none container measures itself
 * at zero width, and CSS-hiding the copy would ship both wordings in the DOM.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    // The initial value is read synchronously in useState above; this only has
    // to track changes from here on.
    const mq = window.matchMedia(QUERY);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isDesktop;
}
