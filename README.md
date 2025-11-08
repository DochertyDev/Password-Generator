# Password Generator

**[Link to Site](https://dochertydev.github.io/Password-Generator/)**

![Screenshot](images/PasswordGeneratorScreenshot.png)

A retro-styled terminal password generator that creates memorable yet secure passwords using random word combinations. This is a single-page application built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Customizable Passwords:** Adjust the number of words (from 1 to 10).
- **Add Complexity:** Optionally include numbers, symbols, and capitalize each word.
- **Custom Separator:** Define a custom character to separate the words (e.g., `_`, `-`, `.`).
- **Secure Generation:** Uses the `window.crypto` API for cryptographically secure random values.
- **Strength Indicator:** Real-time feedback on password strength (Weak, Medium, Strong).
- **Copy to Clipboard:** Easily copy the generated password with a single click.
- **Retro Aesthetic:** A fun, "hacker terminal" interface with a monospace font and green-on-black text.

## How to Use

1.  **Navigate to the [Page URL](https://dochertydev.github.io/Password-Generator/)**.
2.  **Adjust the Options:**
    - **Words:** Set the number of words for your password.
    - **Separator:** Enter the character to place between words.
    - **Numbers:** Check this box to add a two-digit number to each word.
    - **Symbols:** Check this box to add a special character to each word.
    - **Capitalize:** Check this box to capitalize the first letter of each word.
3.  **Generate:** Click the `> GENERATE PASSWORD` button.
4.  **Copy:** The new password will appear in the output field. Click the `[COPY]` button to copy it to your clipboard.

## Local Development

No build process or installation is required. To run the project locally:

1.  Clone the repository:
    ```sh
    git clone https://github.com/DochertyDev/Password-Generator.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Password-Generator
    ```
3.  Open the `index.html` file in any modern web browser.

## Technologies Used

-   **HTML5**
-   **Tailwind CSS** (via CDN)
-   **JavaScript (ES6+)**
-   **Google Fonts** (VT323)
