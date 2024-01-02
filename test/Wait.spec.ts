import * as chai from 'chai';
const { expect } = chai;

import { waitUntilResult } from '../src/wait';

const TEST_TIMEOUT = 10000; //ms
const EXPECTED_NAME = 'Tania';

describe('wait test', () => {
  it('waitUntilResult should succeed', async () => {
    let name = 'Dan';

    setTimeout(() => {
      name = EXPECTED_NAME;
    }, 3000);

    const finalName = await waitUntilResult(
      () => name,
      EXPECTED_NAME,
      TEST_TIMEOUT,
      500,
    );

    expect(finalName).equals(EXPECTED_NAME);
  }).timeout(TEST_TIMEOUT);

  it('waitUntilResult should fail for smaller timeout', async () => {
    let name = 'Dan';
    setTimeout(() => {
      name = EXPECTED_NAME;
    }, 3000);

    const WAIT_UNTIL_TIMEOUT = 2000;
    try {
      await waitUntilResult(() => name, EXPECTED_NAME, WAIT_UNTIL_TIMEOUT, 500);
      throw new Error('waitUntilResult did not timed out');
    } catch (e: unknown) {
      expect((e as { message: string }).message).equals(
        `${WAIT_UNTIL_TIMEOUT} ms timeout exeeded`,
      );
    }
  }).timeout(TEST_TIMEOUT);
});
