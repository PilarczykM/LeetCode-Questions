import { describe, expect, test } from 'vitest';
import { longestCommonPrefix } from './longest-common-prefix';

describe('Longest common prefix', () => {
  test.each([
    { input: ['flower', 'flow', 'flight'], output: 'fl' },
    { input: ['dog', 'racecar', 'car'], output: '' },
    { input: ['flower', 'flower', 'flower'], output: 'flower' },
  ])('longestCommonPrefix(strs: string[]) -> output.', ({ input, output }) => {
    expect(longestCommonPrefix(input)).toBe(output);
  });
});
