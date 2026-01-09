const x = window.DEBUG.info();

declare global {
  interface Window {
    DEBUG: {
      info: () => string;
    };
  }
}
