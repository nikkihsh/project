# Lotto & Fortune Landing Page Blueprint

## Overview
A modern, professional landing page featuring interactive tools for generating lotto numbers and receiving daily fortunes. Designed for a sleek, engaging user experience with a responsive, sectioned layout.

## Features
- **Hero Section:** A powerful call-to-action to engage users immediately.
- **Features Overview:** Highlights the key tools: Lotto Generation and Daily Fortunes.
- **Interactive Lotto Generator:** A dedicated tool for generating 6 unique, sorted numbers (1-45).
- **Daily Fortune Teller:** A random, positive fortune generator to brighten the user's day.
- **Partnership Inquiry Form:** A dedicated contact form for business inquiries powered by Formspree.
- **Dark/Light Mode:** Full theme support with persistence across sessions.
- **Responsive Layout:** Optimized for all screen sizes with a clean header and footer.

## Tech Stack
-   **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, Animations).
-   **Logic:** JavaScript (ES Modules, LocalStorage).
-   **Typography:** Google Fonts (Poppins).
-   **Form Handling:** Formspree.
-   **Ad Revenue:** Google AdSense.
-   **Deployment:** Firebase Hosting.
-   **CI/CD:** GitHub Actions.

## Implementation Plan: Landing Page Transformation

### Objective
Elevate the current app from a single tool into a comprehensive landing page.

### Key Files
-   `index.html`: Restructure into semantic sections (header, main, footer).
-   `style.css`: Apply modern landing page styles, responsive design, and smooth animations.
-   `main.js`: Update to handle any new UI interactions and maintain core tool logic.
-   `ads.txt`: AdSense verification file.
-   `firebase.json`: Hosting configuration for deployment.
-   `.github/workflows/firebase-hosting-merge.yml`: Automatic deployment workflow.

### Implementation Steps
1.  **Refactor HTML:** Implement a structured layout including a navigation bar, a hero section, a features section, a tools section, and a contact section.
2.  **Refine CSS:** Focus on section-based spacing, hero typography, and smooth scrolling.
3.  **Enhance UI:** Add hover effects, better buttons, and cohesive theme transitions.
4.  **Integrate Contact Form:** Add a professional partnership inquiry form linked to Formspree.
5.  **Monetization:** Integrate Google AdSense script, meta tags, and ads.txt file.
6.  **Configure Hosting:** Initialize Firebase Hosting and set up automatic deployment via GitHub Actions.
7.  **Verification:** Confirm all interactive tools and the contact form are functional and the page is mobile-friendly.


## Previous Versions
-   **Initial Version:** Basic generator with static light theme.
-   **Theme Update:** Added dark/light mode toggle and persistence.
-   **Fortune Update:** Added the positive fortune feature.
