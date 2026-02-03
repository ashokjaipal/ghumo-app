# Ghumo - AI-Powered Travel Planning Landing Page

## Overview

Ghumo is a modern, engaging landing page for an AI-powered travel planning mobile app. The landing page showcases the app's main features: AI itinerary planning, connecting with travel influencers, and exploring destinations worldwide. The design follows a premium glassmorphism aesthetic inspired by Airbnb and Headspace.

## Recent Changes

- February 2026: Initial landing page implementation with:
  - Hero section with gradient overlay and glassmorphism navigation
  - Features section with 4 feature cards
  - App mockup showcase with floating animation
  - Trending destinations grid with hover effects
  - Travel influencers section with follow buttons
  - Download CTA section with pulsing glow effect
  - Responsive footer with navigation links

## User Preferences

Preferred communication style: Simple, everyday language.

## Design System

### Brand Colors
- **Primary (Coral Red)**: #FF6B6B - Adventure/excitement
- **Secondary (Turquoise)**: #4ECDC4 - Travel/exploration  
- **Accent (Warm Yellow)**: #FFE66D - Discovery/warmth
- **Background**: White (#FFFFFF)
- **Text**: Dark slate (#2C3E50)
- **Hero Gradient**: Linear gradient from #FF6B6B to #4ECDC4

### Typography
- **Font Family**: Poppins, Inter, sans-serif
- **Headings**: Bold weight, responsive sizing

### Design Patterns
- Glassmorphism effects for navigation and overlay elements
- Card-based layouts for features, destinations, and influencers
- Generous whitespace (32px base spacing)
- Smooth scroll animations using Framer Motion
- Mobile-responsive design

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom theme configuration
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Animations**: Framer Motion for UI animations

The frontend lives in `client/` with the entry point at `client/src/main.tsx`. The main landing page is at `client/src/pages/home.tsx`.

### Project Structure
```
client/
  src/
    assets/images/     # Generated travel images
    components/ui/     # shadcn/ui components
    pages/
      home.tsx         # Main landing page
      not-found.tsx    # 404 page
    App.tsx            # Root component with routing
    index.css          # Global styles and custom CSS classes
    main.tsx           # Entry point
```

### Custom CSS Classes (index.css)
- `.glass` - Glassmorphism effect for overlays
- `.glass-card` - Lighter glassmorphism for cards
- `.gradient-hero` - Coral to turquoise gradient
- `.gradient-text` - Gradient text effect
- `.float-animation` - Floating animation for mockups
- `.pulse-glow` - Pulsing glow effect for CTA buttons

### Backend Architecture
- **Framework**: Express.js 5 with TypeScript
- **Server**: Node.js with HTTP server
- **Runtime**: tsx for TypeScript execution in development

The backend lives in `server/` but is minimal for this landing page.

### Path Aliases
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`
- `@assets` maps to `attached_assets/`

## Development

### Running the Application
The application runs on port 5000 using the "Start application" workflow which executes `npm run dev`.

### Key Dependencies
- **Framer Motion**: Smooth animations and scroll effects
- **Lucide React**: Icon library
- **react-icons**: Additional icons (Apple/Google Play store icons)
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built accessible components
