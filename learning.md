# Next.js Essentials Notes

## 1. `.next` folder
- Contains build output and cache files for your Next.js project.
- Stores compiled JavaScript, CSS, server-side rendered pages, and static assets.
- Automatically generated after running `next build` or `next dev`.
- Usually not modified manually.

## 2. Next.js logo at the bottom of the page
- Part of **Next.js Developer Overlay** shown only in **development mode**.
- Helps show runtime errors by turning red and providing error info.
- Injected dynamically as an SVG, not from your files.
- Not present in production builds, no need to remove it manually.

## 3. No `index.html` file in Next.js like in Vite/React apps
- Vite/react apps use an `index.html` to mount React app and manage routing manually.
- Next.js uses **file-based routing** with `pages/` or `app/` folders.
- No need for manual HTML setup; Next.js handles rendering and routing automatically.
- This is a built-in Next.js functionality for easier SSR and static generation.

## 4. `page.js` vs `layout.js`
- **`page.js`**: Defines a single page’s React component, rendered for that route.  
  Example: `pages/about/page.js` renders the `/about` page.
- **`layout.js`**: Defines a shared layout component wrapping multiple pages in the folder, like header/footer.  
  Example: `pages/dashboard/layout.js` wraps all dashboard-related pages with a common UI.
