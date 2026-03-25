# GEMINI.md - Project Context

## Project Overview
This project is a personal academic website for **Kaifeng He**, a researcher at Sun Yat-sen University (SYSU). It is designed to showcase research publications, grants, and personal background.

### Technologies
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite 7
- **Styling**: Vanilla CSS with a global theme and component-specific stylesheets.
- **Theming**: Supports Dark/Light modes via a `data-theme` attribute on the root element.
- **Deployment**: Configured for GitHub Pages via `.github/workflows/deploy.yml`.

### Architecture
- `src/App.tsx`: Main entry point orchestrating the different sections.
- `src/sections/`: Contains the primary content areas (Hero, About, Research, Contact).
- `src/components/`: Reusable UI components like `Navbar`.
- `src/styles/global.css`: Defines the global theme variables (colors, typography) and base styles.
- `public/`: Stores assets like profile photos, project overviews, and institution logos.

---

## Building and Running
The project uses standard `npm` scripts:

- **Development**: `npm run dev` - Starts the Vite development server.
- **Build**: `npm run build` - Performs TypeScript type checking (`tsc -b`) and generates a production build in `dist/`.
- **Lint**: `npm run lint` - Runs ESLint for code quality checks.
- **Preview**: `npm run preview` - Previews the production build locally.

---

## Development Conventions
- **Theming**: Use CSS variables defined in `src/styles/global.css` for consistent styling across light and dark modes. Dark mode is triggered by `[data-theme='dark']`.
- **Styling**: Prefer section-specific CSS files (e.g., `About.css` imported in `About.tsx`) for modularity.
- **Components**: Functional components using TypeScript interfaces for props.
- **Assets**: Static assets for publications and profile info should be placed in the `public/` directory and referenced via absolute paths (e.g., `/adadec-overview.png`).
- **Typography**: 
  - Serif font (`Crimson Pro`): Used for headings and formal academic sections.
  - Sans-serif font (`Inter`): Used for body text and navigation.
- **Colors**: SYSU Green (`#005826`) is used as the primary accent color in light mode.
