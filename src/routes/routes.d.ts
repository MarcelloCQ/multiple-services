// src/routes/routes.d.ts
declare module '*.json' {
  const value: Array<{ path: string; text: string }>;
  export default value;
}
