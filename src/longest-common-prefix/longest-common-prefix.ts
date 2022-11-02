export function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 1) return strs[0];
  let prefix = '';
  const strsSorted = strs.sort((a, b) => a.length - b.length);
  const firstItem = strsSorted[0];

  for (let i = 0; i < firstItem.length; i++) {
    const letter = firstItem[i];
    for (let j = 1; j < strsSorted.length; j++) {
      const item = strsSorted[j];
      if (item[i] !== letter) return prefix;
    }
    prefix += letter;
  }

  return prefix;
}
