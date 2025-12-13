declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_SENTRY_DSN?: string;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'express';
declare module 'cors';
declare module '@sentry/react';
declare module '@sentry/browser';
declare module 'react/jsx-runtime';
// add more as needed 