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
    const roman_num1 = roman.get(s.charAt(i));
    const roman_num2 = roman.get(s.charAt(i - 1));
    if (i == 0 && roman_num1) result += roman_num1;
    else if (roman_num1 && roman_num2 && roman_num1 > roman_num2) {
      result += roman_num1 - 2 * roman_num2;
    } else if (roman_num1) {
      result += roman_num1;
    }
  }

  return result;
}
