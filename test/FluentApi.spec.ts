import { expect } from 'chai';
import FluentApi from '../src/FluentApi';

describe('FluentApi test', () => {
  it('Move should work recursively', async () => {
    const x = new FluentApi().move(5).move(10).xValue;
    expect(x).equals(15);
  });
});
