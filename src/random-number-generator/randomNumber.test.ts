import { describe, expect, it, vi } from 'vitest';
import { randomNumber } from './randomNumber';

describe('Random number generator', () => {
  it('Produces numbers within the established range', () => {
    const randomGeneratorMock = vi
      .fn()
      .mockReturnValueOnce(0.12445)
      .mockReturnValueOnce(0.542)
      .mockReturnValueOnce(0.889);

    expect(randomNumber(randomGeneratorMock, 10)).toBe(1);
    expect(randomNumber(randomGeneratorMock, 10)).toBe(5);
    expect(randomNumber(randomGeneratorMock, 10)).toBe(9);
  });
});
