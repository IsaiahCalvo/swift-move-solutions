# Calvo Move LLC Website

## Overview
A React + Vite website for Calvo Move LLC, a moving and installation services company operating in NJ/NYC. The site features a landing page with services information, quick quote form, and contact functionality.

## Project Structure
```
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── FAQ.tsx       # FAQ section
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Hero section
│   │   ├── HowItWorks.tsx
│   │   ├── Industries.tsx
│   │   ├── QuickQuoteForm.tsx
│   │   ├── QuoteSection.tsx
│   │   ├── Services.tsx
│   │   └── TopBar.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main landing page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global styles with Tailwind
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn UI components
- React Router DOM for routing
- React Query for data fetching
- React Hook Form with Zod validation

## Running the Project
```bash
npm run dev    # Start development server on port 5000
npm run build  # Build for production
```

## Deployment
Static deployment - builds to `dist/` directory.

## Recent Changes
- 2026-01-06: Imported from Lovable, configured for Replit environment
  - Updated Vite to run on port 5000 with allowedHosts enabled
  - Fixed CSS import order issue
