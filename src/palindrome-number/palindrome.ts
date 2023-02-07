export function isPalindrome(x: number): boolean {
  if (x <= -1) return false;
  if (x <= 9) return true;

  const y = x.toString();
  let pointerX = 0;

  while (pointerX < y.length / 2) {
    let a = y[pointerX];
    let b = y[y.length - 1 - pointerX];

    if (a !== b) return false;
    pointerX++;
  }

  return true;
}
