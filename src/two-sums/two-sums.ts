export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (map.has(another)) {
      return [map.get(another), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
