# 🚀 Java Developer Portfolio | Git-Style Resume

> **Interactive Terminal-Based Portfolio** showcasing Java Backend Development expertise through a unique git-style interface.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge&logo=github-pages)](https://maramarchello.github.io/java-developer-portfolio/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [💻 Terminal Commands](#-terminal-commands)
- [🌐 Internationalization](#-internationalization)
- [🎨 Themes](#-themes)
- [📁 Project Structure](#-project-structure)
- [🎯 Interactive Features](#-interactive-features)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Development](#-development)
- [📞 Contact](#-contact)

---

## 🎯 Overview

This is not just another portfolio website. It's an **interactive terminal-based experience** that showcases my journey as a Java Backend Developer through a familiar git interface. Built with modern web technologies, it combines professional presentation with developer-friendly interactions.

**What makes it unique:**
- 🖥️ **Terminal Interface**: Navigate through my portfolio using real terminal commands
- 📊 **Git Timeline**: Visual representation of my professional journey with diff-style changes
- 🎮 **Interactive Elements**: Fun terminal animations and easter eggs
- 🌍 **Bilingual Support**: Available in English and Spanish
- 🎨 **Theme Switching**: Dark/Light mode support
- 📱 **Fully Responsive**: Works seamlessly on all devices

---

## ✨ Key Features

### 🖥️ Interactive Terminal
- **Real terminal commands** for navigation (`ls`, `cat`, `git log`, `help`)
- **Command history** and auto-completion
- **Search functionality** across portfolio content
- **Fun animations** (`matrix`, `cowsay`, `hack`, `sl`)

### 📊 Git-Style Timeline
- **Interactive commit history** with clickable entries
- **Diff visualization** showing life/career changes
- **Color-coded additions/deletions** like real git diffs
- **Professional milestones** represented as git commits

### 🌐 Multi-Language Support
- **English** and **Spanish** interfaces
- **Dynamic language switching** via terminal commands
- **Localized content** for all sections
- **Search in multiple languages**

### 🎨 Modern UI/UX
- **Terminal-inspired design** with authentic styling
- **Smooth animations** and transitions
- **Dark/Light theme** support
- **Responsive design** for all screen sizes

### 💼 Professional Sections
- **About**: Product-minded developer philosophy
- **Timeline**: Interactive git log of career journey
- **Skills**: Package.json style tech stack presentation
- **Projects**: Showcased Java/Spring Boot applications
- **Contact**: Multiple contact methods with enhanced forms

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.8.3** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 3.4.17** - Utility-first styling

### UI Components
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Consistent iconography
- **Recharts** - Data visualization

### State & Routing
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Autoprefixer** - CSS vendor prefixes
- **GitHub Pages** - Deployment

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaraMarchello/java-developer-portfolio.git
   cd java-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 💻 Terminal Commands

The portfolio features a fully functional terminal interface. Here are the available commands:

### 📁 Navigation Commands
```bash
ls -la              # List portfolio sections
cat [file]          # Navigate to specific section
whoami              # Show about section
tree                # Show portfolio structure
```

### 🔍 Information Commands
```bash
git log             # Show career timeline
help                # Show all available commands
date                # Show current date/time
```

### 🔗 Social Commands
```bash
ssh github          # Open GitHub profile
curl linkedin       # Open LinkedIn profile
download resume     # Download CV/resume PDF
wget resume         # Alternative resume download
```

### ⚙️ Settings Commands
```bash
theme [dark|light|toggle]    # Change theme
lang [en|es|toggle]          # Change language
tema [oscuro|claro]          # Spanish theme commands
idioma [en|es]               # Spanish language commands
```

### 🎮 Fun Commands
```bash
matrix              # Enter the matrix
cowsay [message]    # ASCII cow says message
fortune             # Random programming quote
sl                  # Surprise train animation
hack                # Hacking simulation
```

### 🔧 Utility Commands
```bash
find [keyword]      # Search portfolio content
buscar [palabra]    # Search in Spanish
clear               # Clear terminal
exit                # Leave portfolio (with confirmation)
```

### 💼 Contact Commands
```bash
hire me             # Open contact form
sudo hire-me        # Enhanced contact form with priority
```

---

## 🌐 Internationalization

The portfolio supports **English** and **Spanish** languages with:

- **Complete translations** for all content
- **Dynamic language switching** via terminal commands
- **Localized search functionality**
- **Culture-specific formatting**

### Language Commands
```bash
# English
lang en             # Switch to English
lang es             # Switch to Spanish
lang toggle         # Toggle between languages
lang                # Show current language

# Spanish
idioma en           # Cambiar a inglés
idioma es           # Cambiar a español  
idioma alternar     # Alternar idiomas
idioma              # Mostrar idioma actual
```

---

## 🎨 Themes

### Dark Theme (Default)
- Terminal-green accent colors
- Dark backgrounds for better focus
- High contrast for readability

### Light Theme
- Professional light interface
- Optimized for daytime viewing
- Maintains terminal aesthetics

### Theme Commands
```bash
theme dark          # Switch to dark theme
theme light         # Switch to light theme
theme toggle        # Toggle between themes
theme               # Show current theme
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── GitTimeline.tsx      # Interactive git log timeline
│   │   ├── PackageSkills.tsx    # Skills in package.json style
│   │   ├── TerminalHeader.tsx   # Main terminal interface
│   │   ├── theme-provider.tsx   # Theme management
│   │   └── ui/                  # Reusable UI components
│   ├── i18n/
│   │   ├── en.ts               # English translations
│   │   ├── es.ts               # Spanish translations
│   │   └── index.ts            # Language provider
│   ├── pages/
│   │   ├── Index.tsx           # Main portfolio page
│   │   └── NotFound.tsx        # 404 page
│   ├── utils/
│   │   ├── portfolio-search.ts  # Search functionality
│   │   └── terminal-animations.tsx # Fun terminal animations
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles & animations
├── public/
│   └── CV_Marat_Nurmukhametov_eng.pdf  # Downloadable resume
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

---

## 🎯 Interactive Features

### 🖥️ Terminal Interface
- **Command history** with up/down arrow navigation
- **Tab completion** for commands
- **Real-time command validation**
- **Contextual help system**

### 📊 Git Timeline
- **Clickable commits** showing detailed changes
- **Diff-style visualization** with color coding:
  - 🟢 **Green**: Additions/New achievements
  - 🔴 **Red**: Deletions/Changes
  - 🟡 **Yellow**: Modifications/Updates
- **Statistics display** (files changed, additions, deletions)

### 🔍 Smart Search
- **Full-text search** across all portfolio content
- **Multi-language search** support
- **Contextual results** with section highlighting
- **Search suggestions** and auto-complete

### 📱 Contact Forms
- **Standard contact form** (`hire me`)
- **Enhanced priority form** (`sudo hire-me`)
- **Direct email integration**
- **Resume download functionality**

---

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Responsive terminal** that adapts to screen size
- **Touch-friendly interactions** on mobile devices
- **Optimized typography** for all screen sizes
- **Accessible keyboard navigation**

---

## 🔧 Development

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run build:dev   # Build for development
npm run lint        # Run ESLint
npm run preview     # Preview production build
npm run deploy      # Deploy to GitHub Pages
```

### Key Dependencies

- **@radix-ui/\*** - Accessible UI primitives
- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility
- **lucide-react** - Icon library
- **next-themes** - Theme management
- **react-router-dom** - Routing
- **tailwind-merge** - Tailwind class merging
- **zod** - Schema validation

---

## 📞 Contact

**Marat Nurmukhametov** - Junior Java Developer

- 📧 **Email**: [maramarchelo@gmail.com](mailto:maramarchelo@gmail.com)
- 📱 **Phone**: [+34 635 664 902](tel:+34635664902)
- 💼 **LinkedIn**: [marat-nurmukhametov](https://www.linkedin.com/in/marat-nurmukhametov/)
- 🐙 **GitHub**: [MaraMarchello](https://github.com/MaraMarchello)
- 📍 **Location**: Spain (Remote work available)

---

## 🎯 Professional Philosophy

> *"I don't just write code. I create reliable, scalable systems that generate profit. My experience building a business from scratch in a foreign country and managing a remote team taught me the main thing: any task is a system. It needs to be designed, optimized and scaled."*

### What You Get:
- 🎯 **Product-minded developer** who thinks beyond specifications
- 🏗️ **Engineer, not just coder** with solid architectural foundations
- 🌊 **Flexible and resilient** professional adapted to change
- 🌉 **Bridge between departments** with multilingual communication skills

---

<div align="center">

**Made with ❤️ by Marat Nurmukhametov**

*Ready to prove value on complex tasks from day one*

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Live%20Site-blue?style=for-the-badge)](https://maramarchello.github.io/java-developer-portfolio/)

</div>