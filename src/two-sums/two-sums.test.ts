import { describe, expect, test } from 'vitest';
import { twoSum } from './two-sums';

describe('Two sum', () => {
  test.each([
    { a: [3, 2, 3], b: 6, c: [0, 2] },
    { a: [2, 7, 11, 15], b: 9, c: [0, 1] },
    { a: [3, 2, 4], b: 6, c: [1, 2] },
    { a: [3, 3], b: 6, c: [0, 1] },
    { a: [2, 7, 11, 15], b: 26, c: [2, 3] },
    { a: [-3, 3], b: 0, c: [0, 1] },
    { a: [-3, -3], b: -6, c: [0, 1] },
  ])('twoSum(nums, target) -> array.', ({ a, b, c }) => {
    expect(twoSum(a, b).sort()).toEqual(c.sort());
  });
});
