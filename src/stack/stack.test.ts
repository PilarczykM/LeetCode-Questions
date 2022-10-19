import { beforeEach, describe, expect, it } from 'vitest';
import { Stack } from './stack';

describe('My Stack', () => {
  let stack: Stack<string>;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty.', () => {
    expect(stack.size()).toBe(0);
  });

  it('can push to the top.', () => {
    const item = '🍧';

    stack.push(item);

    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(item);
  });

  it('can pop off', () => {
    const item = '🍧';

    stack.push(item);
    const popValue = stack.pop();

    expect(item).toBe(popValue);
    expect(stack.size()).toBe(0);
    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);
  });
});
