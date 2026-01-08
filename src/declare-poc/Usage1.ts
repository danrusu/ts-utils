const info1 = DEBUG1.info();

declare global {
  const DEBUG2: {
    info(): string;
  };
}

const info2 = DEBUG2.info();

declare const DEBUG3: {
  info(): string;
};

const info3 = DEBUG3.info();

const info4 = DEBUG4.info();
