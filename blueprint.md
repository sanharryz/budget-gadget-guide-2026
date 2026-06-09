# Project Blueprint

## Overview

This project is a guide to the best cheap smartwatches in 2026. It provides a list of top picks under $100, along with their key features, pros, and cons. The application is built with Next.js and uses a modern, card-based design.

## Project Structure (Pages Router)

This project uses the Next.js Pages Router.

- **`/pages`**: The core directory for file-based routing.
  - `index.tsx`: The main page of the application.
  - `_app.tsx`: The root component for the application, used for global styles.
- **`/components`**: For reusable UI components like `Card.tsx` and `BackToTop.tsx`.
- **`/styles`**: For global stylesheets.
- **`/public`**: For static assets like images.

## Style and Design

- **Layout:** The application uses a single-column layout with a central content area.
- **Header:** The main page features a prominent hero section with a background image and a title and subtitle with text shadows.
- **Cards:** Each smartwatch is displayed in a card with a box-shadow and hover effect. The `Card` component is a reusable component located in the `/components` directory.
- **Typography:** The typography is clean and readable, with a clear hierarchy of headings and paragraphs.
- **Color Palette:** The color palette is simple and modern, with a white background, dark text, and subtle gray accents.
- **Footer:** A footer with social media links and copyright information.

## Features

- **Smartwatch List:** The main page displays a list of the best cheap smartwatches.
- **Detailed Information:** Each smartwatch card provides detailed information, including key specs, pros, and cons.
- **Comparison Table:** A quick comparison table allows users to easily compare the different smartwatches.
- **FAQ Section:** A frequently asked questions section answers common questions about budget smartwatches.
- **Back to Top Button:** A button that allows users to easily scroll back to the top of the page.

## Current Plan

- **FIXED:** The application was showing a 404 error due to an incorrect file structure. The project was using the Pages Router, but the files were structured for the App Router. I have moved the files to the correct `pages` directory structure, and the application is now rendering correctly.
- **DONE:** Improved the visual design of the application by adding a hero section, improving the card design, and adding a "Back to Top" button and footer.
