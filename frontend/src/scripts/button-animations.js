// frontend/src/scripts/button-animations.js

import { prefersReducedMotion } from './global.js';

export function initializeButtonAnimations() {
    if (prefersReducedMotion()) {
        return; // Skip animations if user prefers reduced motion
    }

    const buttons = document.querySelectorAll('.terminal-button');

    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
            button.style.boxShadow = '0 0 5px #28a745';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)'; // Revert to hover state or default
            button.style.boxShadow = '0 0 15px #28a745'; // Revert to hover state or default
        });

        // Handle cases where mouseup might occur outside the button after mousedown
        button.addEventListener('mouseleave', () => {
            if (button.style.transform === 'scale(0.98)') {
                button.style.transform = ''; // Reset to default
                button.style.boxShadow = ''; // Reset to default
            }
        });
    });
}
