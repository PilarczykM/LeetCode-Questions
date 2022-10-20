import { describe, expect, test } from 'vitest';
import { romanToInt } from './roman-to-int';

describe('Roman to Integer', () => {
  test.each([
    { input: 'I', output: 1 },
    { input: 'i', output: 1 },
    { input: 'V', output: 5 },
    { input: 'v', output: 5 },
    { input: 'x', output: 10 },
    { input: 'X', output: 10 },
    { input: 'L', output: 50 },
    { input: 'l', output: 50 },
    { input: 'c', output: 100 },
    { input: 'C', output: 100 },
    { input: 'D', output: 500 },
    { input: 'd', output: 500 },
    { input: 'M', output: 1000 },
    { input: 'm', output: 1000 },
    { input: 'XX', output: 20 },
    { input: 'XV', output: 15 },
    { input: 'XXV', output: 25 },
    { input: 'MD', output: 1500 },
    { input: 'MDLXIII', output: 1563 },
    { input: 'IV', output: 4 },
    { input: 'XXIX', output: 29 },
  ])('romanToInt(input) -> output.', ({ input, output }) => {
    expect(romanToInt(input)).toBe(output);
  });
});
