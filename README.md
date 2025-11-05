# Password Generator

![Screenshot](images/PasswordGeneratorScreenshot.png)

A retro-styled terminal password generator that creates memorable yet secure passwords using random word combinations.

## Features

**Customizable Password Generation**
- Choose how many words to include (1-10)
- Add two-digit numbers to each word
- Include random symbols for extra security
- Capitalize each word for added complexity
- Custom separator characters

**Security**
- Uses cryptographically secure random number generation via `window.crypto`
- Real-time password strength indicator (Weak/Medium/Strong)
- Word pool of 500+ diverse words including fruits, nature terms, descriptive words, objects, and more

**User Experience**
- Clean hacker terminal aesthetic with green phosphor styling
- One-click password generation
- Copy to clipboard functionality
- Responsive design that works on mobile and desktop

**Enhanced User Interface**
- Smooth button hover and click animations for interactive feedback.
- Fluid input field interactions with visual cues on focus.
- Animated scrolling experience with subtle parallax effects for the title.

## How It Works

The generator randomly selects words from a large dictionary and combines them based on your preferences. By default, it creates passwords like `curious12_shadow89_river45_diamond23_gentle67`.

With all options enabled, passwords can look like `Curious12!_Shadow89@_River45#_Diamond23$_Gentle67%` for maximum security.

## Technical Details

- Pure HTML/CSS/JavaScript (no dependencies except Tailwind CSS via CDN)
- VT323 monospace font for authentic terminal look
- Custom styled checkboxes and scrollbars
- Mobile-responsive layout
- Modular JavaScript for UI animations (button, input, scroll effects).

## Usage

Just open `PasswordGenerator.html` in any modern web browser. No installation or server required.