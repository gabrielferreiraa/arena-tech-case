# Arena Tech Case - Product Hunt Clone

A product listing application built with the Product Hunt API for Arena's hiring process.

## Technical Decisions
<details>
  <summary>Why I'm using NextJS?</summary>
  To consume the Product Hunt API, it’s necessary to have a token. Since it’s considered a good practice not to expose tokens on the client side (for example, when using only Vite), I found it easier to use Next.js. With Next.js, I can have both client and server in the same project, which makes it very quick and simple to deploy.  
  
  I chose this approach as a good security practice.
</details>

<details>
  <summary>Why all pages is rendered on client side?</summary>
  Since Styled Components was a "nice to have" library in the challenge, I thought it would be interesting to work with it. However, since my previous choice was to use Next.js, Styled Components doesn’t work very well with Next.js server components yet. Because of that, I had to force client-side rendering.
</details>

## Next Steps
- [ ] Implement Zustand global store to store upvotes
- [ ] Standardize UI components (e.g. button, text etc)
- [ ] Generate GraphQL types automatically
- [ ] Implement Cache Management
- [ ] Improve Theme patterns
- [ ] Implement Search Feature

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
npm run test     # Run all tests
```
