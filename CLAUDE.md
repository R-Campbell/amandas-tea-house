# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amanda's Tea House - A Vue.js website for a tea house, built with TypeScript and Vite. This is not an e-commerce store and there should be no references to pricing, carts, or the ability to purchase teas.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format

# Run unit tests
npm run test:unit

# Run e2e tests (interactive)
npm run test:e2e

# Run e2e tests (CI)
npm run test:e2e:ci

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Tech Stack

- **Vue 3** with Composition API and TypeScript
- **Vite** for build tooling and development server
- **Vue Router** for client-side routing
- **Pinia** for state management
- **Vitest** for unit testing
- **Cypress** for e2e testing

### Project Structure

- `src/views/` - Page components (HomeView, ProductsView)
- `src/components/` - Reusable Vue components
- `src/router/` - Vue Router configuration
- `src/stores/` - Pinia state management stores
- `src/assets/` - Static assets and global CSS
- `.github/workflows/` - GitHub Actions for automated deployment

### Deployment

- Automatically deploys to GitHub Pages via GitHub Actions on push to main branch
- Vite base URL configured for GitHub Pages (`/amandas-tea-shop/`)
- Uses `gh-pages` package for deployment
