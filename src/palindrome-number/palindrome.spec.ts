import { describe, it, expect } from 'vitest';
import { isPalindrome } from './palindrome';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

describe('Palindrome', () => {
  it('Single digit is allways palindromic', () => {
    const input = getRandomInt(0, 9);
    const output = true;

    expect(isPalindrome(input)).toBe(output);
  });
  it('Minus numbers are not palindromic', () => {
    const input = getRandomInt(-1000, -1);
    const output = false;

    expect(isPalindrome(input)).toBe(output);
  });

  it('Expected output true after passing 121', () => {
    const input = 121;
    const output = true;

    expect(isPalindrome(input)).toBe(output);
  });

  it('Expected output false after passing 10', () => {
    const input = 10;
    const output = false;

    expect(isPalindrome(input)).toBe(output);
  });
});
