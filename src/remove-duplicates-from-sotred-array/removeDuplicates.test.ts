import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

const checkArrayMutate = (inputNums: number[], expectedNums: number[]) => {
  for (let i = 0; i < expectedNums.length; i++) {
    expect(inputNums[i]).toBe(expectedNums[i]);
  }
};

describe('Remove duplicates from sorted array', () => {
  it('Expected output 2 after passing [1, 1, 2]', () => {
    const input: number[] = [1, 1, 2];
    const output = 2;
    const expectedNums = [1, 2];

    expect(removeDuplicates(input)).toBe(output);
    checkArrayMutate(input, expectedNums);
  });

  it('Expected output 5 after passing [0,0,1,1,1,2,2,3,3,4]', () => {
    const input: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const output = 5;
    const expectedNums = [0, 1, 2, 3, 4];

    expect(removeDuplicates(input)).toBe(output);
    checkArrayMutate(input, expectedNums);
  });
});
