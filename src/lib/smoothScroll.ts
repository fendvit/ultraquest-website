import type Lenis from 'lenis';

/**
 * Lenis drives the page's scrolling, so anything that needs to freeze the page
 * (the mobile menu overlay) has to go through the instance rather than just
 * setting `overflow: hidden` — Lenis would keep scrolling regardless.
 */
let instance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function freezeScroll() {
  instance?.stop();
  document.body.style.overflow = 'hidden';
}

export function unfreezeScroll() {
  instance?.start();
  document.body.style.overflow = '';
}
