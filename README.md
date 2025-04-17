# Personal Website

This repository contains the codebase for my personal portfolio website, built using React, TypeScript, and Material UI (MUI). It showcases my skills, projects, experience, and provides ways for potential employers or collaborators to connect.

## Table of Contents

- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Details](#project-details)
  - [Components Breakdown](#components-breakdown)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## Introduction

This personal website is designed to provide a clean, responsive, and engaging online presence, showcasing my technical abilities, projects I've worked on, and information about my professional experience.

## Technology Stack

- **Frontend:** React, TypeScript, Vite
- **Styling/UI:** Material UI (MUI)
- **Deployment:** GitHub Pages (suggested)

## Features

- Responsive layout for optimal viewing on desktop and mobile devices
- Interactive typewriter text animation on the intro section
- Smooth scrolling and animations for enhanced UX
- Modular and maintainable component structure
- Dynamic content showcasing skills and experience

## Project Structure

```
personal-website/
├── public/
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Intro/
│   │   │   ├── AnimatedShapes.tsx
│   │   │   ├── BulletList.tsx
│   │   │   ├── TypewriterName.tsx
│   │   │   └── Intro.tsx
│   │   └── Resume/
│   ├── SharedFunctions/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## Project Details

### Components Breakdown

- **Intro Section:**

  - Typewriter animation to introduce myself in an engaging manner.
  - Animated shapes for visual appeal.

- **About Section:**

  - Detailed professional biography.
  - Expandable "My Stack" section highlighting current technologies.

- **Resume Section:**

  - Structured layout of professional experience and education.
  - Interactive elements and collapsible details.

- **Contact Section:**

  - Simplified method for reaching out through various platforms.

- **Footer and Header:**
  - Persistent navigation and social links.

## Customization

- Replace content within components under `/src/Components`.
- Update styles and theme in `/src/index.css` and MUI's theming system.
- Modify animations or create new ones in relevant component files.

## Deployment

Deploy easily using [GitHub Pages](https://pages.github.com/):

```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

Then visit `https://yourusername.github.io/personal-website/`

## Contact

Feel free to connect or reach out through:

- [LinkedIn](https://linkedin.com/in/yourlinkedin)
- [GitHub](https://github.com/yourgithub)
- Email: your.email@example.com

Thank you for checking out my personal website repository!
