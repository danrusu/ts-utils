import 'mocha';
import { expect, assert } from 'chai';
import SoftAssert from '../src/SoftAssert';

describe('Soft assert test', () => {
  const soft = new SoftAssert();
  it('Collects failures and throws relevant error', () => {
    const EXPECTED_ASSERTION_ERROR = [
      '3 failed assertions',
      'numbers check: expected 1 to equal 2',
      'array check: expected [ 1, 2, 3 ] to include 4',
      'TEST FAILURE',
    ].join('\n');
    assert.throws(
      () => {
        soft.assert(
          () => expect(1, 'numbers check').to.equal(2),
          () => expect(1).to.equal(1),
          () => expect([1, 2, 3], 'array check').to.include(4),
        );
        soft.assert(
          () => {
            throw new Error('TEST FAILURE');
          },
          () => expect(true).to.be.true,
        );
        soft.assertAll();
      },
      Error,
      EXPECTED_ASSERTION_ERROR,
    );
  });

  it('Does not throw if no assertion fails', () => {
    assert.doesNotThrow(() => {
      soft.assert(
        () => expect(1.5, 'numbers check').to.equal(1.5),
        () => expect(1).to.equal(1),
        () => expect([1, 2, 3], 'array check').to.include(2),
        () => expect(undefined).to.be.undefined,
        () => expect(true).to.be.true,
      );
      soft.assertAll();
    });
  });
});
