// this is a module file because of the export statement below

declare global {
  const DEBUG4: {
    info(): string;
  };
}

export const DEBUG5: {
  info(): string;
};

export {};
