# Lotto Number Generator Blueprint

## Overview
A simple, modern web application for generating random lotto numbers (1-45) and providing a positive "Today's Fortune," built with HTML, CSS, and JavaScript.

## Features
-   **Random Lotto Generation:** Generates 6 unique numbers between 1 and 45.
-   **Sorted Output:** Displays lotto numbers in ascending order.
-   **Today's Fortune:** Provides a random, positive daily fortune message.
-   **Modern Design:** Clean, responsive UI with Poppins font and interactive elements.
-   **Theme Switching:** Support for Light and Dark modes with persistent user preference.

## Tech Stack
-   HTML5
-   CSS3 (Custom Properties, Flexbox)
-   JavaScript (ES Modules, LocalStorage)

## Implementation Plan: Today's Fortune

### Objective
Add a fun, engaging feature that gives users a positive boost with a random daily fortune message.

### Key Files
-   `index.html`: Add a fortune display area and a trigger button.
-   `style.css`: Style the fortune section to be visually distinct and elegant.
-   `main.js`:
    -   Create an array of positive fortunes.
    -   Implement logic to pick and display a random fortune.

### Implementation Steps
1.  **Update HTML:** Add a `section` for fortunes and a "Get Fortune" button.
2.  **Update CSS:** Add styling for the fortune text and its container, ensuring it fits the existing theme (dark/light).
3.  **Update JS:**
    -   Define an array of at least 10 positive fortunes.
    -   Add an event listener to the fortune button.
    -   Implement a function to update the fortune display.
4.  **Verification:** Ensure both lotto and fortune features work independently and look good together.

## Previous Versions
-   **Initial Version:** Basic generator with static light theme.
-   **Theme Update:** Added dark/light mode toggle and persistence.
