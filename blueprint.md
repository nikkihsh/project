# Lotto Number Generator Blueprint

## Overview
A simple, modern web application for generating random lotto numbers (1-45), built with HTML, CSS, and JavaScript.

## Features
-   **Random Generation:** Generates 6 unique numbers between 1 and 45.
-   **Sorted Output:** Displays numbers in ascending order.
-   **Modern Design:** Clean, responsive UI with Poppins font and circular number displays.
-   **Theme Switching:** Support for Light and Dark modes with persistent user preference.

## Tech Stack
-   HTML5
-   CSS3 (Custom Properties, Flexbox)
-   JavaScript (ES Modules, LocalStorage)

## Implementation Plan: Theme Switching (Dark/Light Mode)

### Objective
Provide users with the ability to toggle between light and dark themes, preserving their preference across sessions.

### Key Files
-   `index.html`: Add theme toggle UI element.
-   `style.css`: Refactor styles to use CSS variables and define the dark theme.
-   `main.js`: Implement toggle logic and persistence using `localStorage`.

### Implementation Steps
1.  **Refactor CSS:** Introduce `:root` variables for colors and create a `body.dark-theme` class to override them.
2.  **Add Toggle UI:** Insert a theme switch button in `index.html`.
3.  **Implement JS Logic:**
    -   Detect system preference or `localStorage` on load.
    -   Listen for toggle clicks.
    -   Update `localStorage` and apply the class.
4.  **Verification:** Test the toggle on different devices and ensure the preference persists after refresh.

## Previous Versions
-   **Initial Version:** Basic generator with static light theme.
