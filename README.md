# Arena Tech Case - Product Hunt Clone

A product listing application built with the Product Hunt API for Arena's hiring process.

## Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **GraphQL** - API queries

## Getting Started

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Add your Product Hunt API token

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## API Integration

Uses Product Hunt's GraphQL API to fetch and display products with real-time data.