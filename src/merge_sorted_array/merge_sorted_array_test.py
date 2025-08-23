from src.merge_sorted_array.merge_sorted_array import MergeSortedArray


class TestMergeSortedArray:
    def _assert_merge(self, nums1, m, nums2, n, output):
        MergeSortedArray().merge(nums1, m, nums2, n)

        assert output == nums1

    def test_merge_example_1(self):
        nums1, nums2 = [1, 2, 3, 0, 0, 0], [2, 5, 6]
        m, n = 3, 3
        output = [1, 2, 2, 3, 5, 6]

        self._assert_merge(nums1, m, nums2, n, output)

    def test_merge_example_2(self):
        nums1, nums2 = [1], []
        m, n = 1, 0
        output = [1]

        self._assert_merge(nums1, m, nums2, n, output)

    def test_merge_example_3(self):
        nums1, nums2 = [0], [1]
        m, n = 0, 1
        output = [1]

        self._assert_merge(nums1, m, nums2, n, output)


class TestMergeSortedArray_O_n:
    def _assert_merge(self, nums1, m, nums2, n, output):
        MergeSortedArray().merge_2(nums1, m, nums2, n)

        assert output == nums1

    def test_merge_example_1(self):
        nums1, nums2 = [1, 2, 3, 0, 0, 0], [2, 5, 6]
        m, n = 3, 3
        output = [1, 2, 2, 3, 5, 6]

        self._assert_merge(nums1, m, nums2, n, output)

    def test_merge_example_2(self):
        nums1, nums2 = [1], []
        m, n = 1, 0
        output = [1]

        self._assert_merge(nums1, m, nums2, n, output)

    def test_merge_example_3(self):
        nums1, nums2 = [0], [1]
        m, n = 0, 1
        output = [1]

        self._assert_merge(nums1, m, nums2, n, output)
