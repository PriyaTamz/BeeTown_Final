# Bee Town Water Park Website

## Overview

This is a full-stack web application for Bee Town Water Park, built with modern web technologies. The application serves as a complete website solution featuring information about the water park, facilities, food menu, event listings, photo gallery, and an integrated booking system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using React with TypeScript and follows a component-based architecture:

- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom water park theme colors
- **UI Components**: Radix UI components with shadcn/ui implementation
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture

The backend uses a Node.js/Express setup with TypeScript:

- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **Development**: Hot reload with Vite integration

### Database Layer

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Centralized in `shared/schema.ts` with Zod validation
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Frontend Components

1. **Navigation**: Fixed header with responsive mobile menu
2. **Hero Section**: Landing page with call-to-action buttons
3. **Booking Form**: Multi-step ticket booking interface
4. **Food Carousel**: Interactive food menu display
5. **Gallery**: Image gallery with lightbox functionality
6. **Footer**: Site-wide footer with links and contact info

### Backend Components

1. **Storage Layer**: Abstracted storage interface with in-memory implementation
2. **Route Handler**: Centralized route registration system
3. **Vite Integration**: Development server with HMR support
4. **Error Handling**: Global error middleware

### Page Structure

- **Home**: Hero section and main landing page
- **About**: Information about the water park
- **Booking**: Ticket booking system
- **Gallery**: Photo gallery
- **Events**: Upcoming events and activities
- **Facilities**: Park facilities and amenities
- **Food**: Menu and food options
- **Contact**: Contact information and location

## Data Flow

1. **Client Requests**: React components make API calls through React Query
2. **API Layer**: Express routes handle requests and interact with storage
3. **Storage Layer**: Abstracted storage interface (currently in-memory, ready for database)
4. **Database**: PostgreSQL with Drizzle ORM for data persistence
5. **Response**: JSON responses sent back to client components

## External Dependencies

### Frontend Dependencies

- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: TailwindCSS for utility-first CSS
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with resolvers
- **Date Utilities**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image/content carousels

### Backend Dependencies

- **Database**: Neon Database for PostgreSQL hosting
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Store**: PostgreSQL session management
- **Validation**: Zod for runtime type validation
- **Development**: tsx for TypeScript execution

### Development Tools

- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **ESBuild**: Backend bundling for production
- **Replit Integration**: Specialized plugins for Replit environment

## Deployment Strategy

### Development Environment

- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with file watching
- **Database**: Neon Database connection
- **Integration**: Unified development setup with Vite middleware

### Production Build

- **Frontend**: Vite build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Static Assets**: Served from Express in production
- **Database**: PostgreSQL via Neon Database

### Configuration

- **Environment Variables**: Database URL via `DATABASE_URL`
- **Path Aliases**: Configured for both frontend and backend
- **TypeScript**: Shared configuration for consistent typing
- **Tailwind**: Custom theme colors for water park branding

The application is designed to be easily deployable to various platforms while maintaining a consistent development experience across different environments.