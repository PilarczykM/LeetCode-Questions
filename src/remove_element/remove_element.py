class RemoveElement:
    def removeElement(self, nums: list[int], val: int) -> int:
        i, k = 0, 0
        arr_len = len(nums) - 1
        j = arr_len

        while i <= arr_len:
            if nums[i] == val:
                nums[i] = nums[j]
                nums[j] = -1
                j -= 1
                arr_len -= 1
            else:
                k += 1
                i += 1
        return k
