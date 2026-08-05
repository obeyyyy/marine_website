// Fallback declaration so the IDE's TS server always accepts side-effect CSS
// imports (e.g. `import "./globals.css"`), even when the generated Next.js
// types in .next/ haven't been picked up yet after a cache clean.
declare module '*.css';
