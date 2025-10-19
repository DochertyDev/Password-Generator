// frontend/src/scripts/scroll-animations.js

import { prefersReducedMotion } from './global.js';

export function initializeScrollAnimations() {
    if (prefersReducedMotion()) {
        return; // Skip animations if user prefers reduced motion
    }

    const terminalContainer = document.querySelector('.terminal-container');

    if (terminalContainer) {
        terminalContainer.addEventListener('scroll', () => {
            // Example: Simple parallax effect for the H1 title
            const h1 = document.querySelector('h1');
            if (h1) {
                const scrolled = terminalContainer.scrollTop;
                h1.style.transform = `translateY(${scrolled * 0.2}px)`;
            }

            // Example: Fade in elements on scroll (simple reveal)
            const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
            elementsToAnimate.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                if (elementTop < viewportHeight - 100) { // 100px offset from bottom
                    element.style.opacity = 1;
                    element.style.transition = 'opacity 0.5s ease-out';
                }
            });
        });
    }
}
