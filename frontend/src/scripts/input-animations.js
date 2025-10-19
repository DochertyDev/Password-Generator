// frontend/src/scripts/input-animations.js

import { prefersReducedMotion } from './global.js';

export function initializeInputAnimations() {
    if (prefersReducedMotion()) {
        return; // Skip animations if user prefers reduced motion
    }

    const inputFields = document.querySelectorAll('.password-input');

    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
            input.style.borderColor = '#38b755'; // Lighter green on focus
            input.style.boxShadow = '0 0 15px #38b755';
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = ''; // Revert to default
            input.style.boxShadow = ''; // Revert to default
        });
    });
}
