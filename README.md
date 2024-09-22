# Squarespace-like Website Builder

This project is a **website builder** application, inspired by Squarespace, built using **React**, **Tailwind CSS**, and **Redux**. The application allows users to build a custom website by selecting various options, such as titles, sections, color themes, and fonts. Users can personalize their websites step-by-step, starting with a title, moving on to sections, and finally styling with custom color palettes and fonts.

## Features

- **Title Customization**: Users can give a custom title to their website, choose the font style, and edit it interactively.
- **Section Selection**: Users can pick different sections (e.g., intro, product, about) to include on their website.
- **Color Theme Selection**: Users can choose from various color themes to set the background, button, and font colors of their website.
- **Font Customization**: Select a font style that matches your brand. The application supports dynamic font loading.
- **Drag-and-Resize Components**: Components like the title section can be repositioned and resized interactively on the page.

## Built With

- **React**: Frontend library used to build the user interface.
- **Tailwind CSS**: Utility-first CSS framework used for rapid UI styling and responsive design.
- **Redux**: State management for managing global state, allowing persistent selections like title, colors, fonts, and sections across the app.
- **React-RND**: Allows drag-and-drop and resizing of components within the website builder.
- **Redux Persist**: Ensures state (title, sections, themes, etc.) is persisted even after page refresh.
  
## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js**: Required to run the app locally.
- **npm or yarn**: Package manager for installing dependencies.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhilashvailappilly/Squarespace.git
   cd squarespace-builder
2. Install the dependencies:
    ```bash
    npm install