import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

describe('Remove duplicates from sorted array', () => {
  it('Expected output 2 after passing [1, 1, 2]', () => {
    const input: number[] = [1, 1, 2];
    const output = 2;

    expect(removeDuplicates(input)).toBe(output);
  });

  it('Expected output 5 after passing [0,0,1,1,1,2,2,3,3,4]', () => {
    const input: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const output = 5;

    expect(removeDuplicates(input)).toBe(output);
  });
});
