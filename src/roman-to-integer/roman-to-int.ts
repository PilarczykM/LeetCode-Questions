export function romanToInt(s: string): number {
  s = s.toUpperCase();
  let result = 0;
  const roman = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  for (let i = 0; i < s.length; i++) {
    const romanNum1 = roman.get(s.charAt(i));
    const romanNum2 = roman.get(s.charAt(i - 1));
    if (i == 0 && romanNum1) result += romanNum1;
    else if (romanNum1 && romanNum2 && romanNum1 > romanNum2) {
      result += romanNum1 - 2 * romanNum2;
    } else if (romanNum1) {
      result += romanNum1;
    }
  }

  return result;
}
