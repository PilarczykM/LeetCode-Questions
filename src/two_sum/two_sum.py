class TwoSum:
    def twoSum(self, nums: list[int], target: int) -> list[int]:  # 0(n^2) 18.63MB
        for idx, x in enumerate(nums):
            for jdx, y in enumerate(nums):
                if idx >= jdx:
                    continue

                if x + y == target:
                    return [idx, jdx]

        raise ValueError(f"{target} not found in list")

    def twoSum_2(self, nums: list[int], target: int) -> list[int]:  # 0(n^2)
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]

        raise ValueError(f"{target} not found in list")

    def twoSum_3(self, nums: list[int], target: int) -> list[int]:  # O(n) 19.17MB
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
        # If no valid pair is found, return an empty list
        raise ValueError(f"{target} not found in list")
