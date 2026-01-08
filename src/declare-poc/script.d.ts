// this is a script file, so the declarations here are in the global scope
// (no export {} is present)

// cannot have runtime code in a .d.ts file
// so we use 'declare' to declare the shape of the constant DEBUG1

declare const DEBUG1: {
  info(): string;
};

// export {}; // make this file a module to avoid polluting global scope
// in case of a module DEBUG will not be visible in other modules
