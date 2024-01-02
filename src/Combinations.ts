/* eslint-disable @typescript-eslint/no-unused-vars */
type Numbers = 1 | 2 | 3;

type Combinations<T extends Numbers> = `${T}-${T}`;

const c1: Combinations<Numbers> = '1-1';
const c2: Combinations<Numbers> = '2-3';

// @ts-expect-error - no spaces allowed
const c3: Combinations<Numbers> = '1 - 1';

// @ts-expect-error - only 1 and 2 accepted
const c4: Combinations<Numbers> = '1-4';
