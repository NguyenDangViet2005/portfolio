# SEO Files Overview

This note summarizes the SEO-related files added/updated in the portfolio app and what each one does.

## Files

- app/layout.tsx
  - Sets base metadata for the site (title template, default description, metadataBase).
  - Injects global JSON-LD structured data (Person) via StructuredData.

- app/page.tsx
  - Exports generateMetadata() for dynamic metadata (title, description, Open Graph, Twitter, canonical).
  - Uses cached data helpers so repeated access in the same render is memoized.
  - Adds page-level JSON-LD that lists projects as work examples.

- app/home-page.tsx
  - Client component that holds the UI previously in app/page.tsx.
  - Keeps app/page.tsx as a Server Component so metadata and JSON-LD work.

- app/robots.ts
  - Generates robots.txt with allow rules and the sitemap URL.

- app/sitemap.ts
  - Generates sitemap.xml entries (home page), with lastModified and priority.

- lib/portfolio-data.ts
  - Centralized, cached data helpers (site config, projects, stats, story).
  - Uses React cache() to memoize data access within a render.

- components/StructuredData.tsx
  - Renders JSON-LD via a script tag.
  - Sanitizes '<' to avoid XSS injection in JSON-LD payloads.

## Config

- NEXT_PUBLIC_SITE_URL
  - Base URL used by metadata, robots, and sitemap. Set this to the production domain.
