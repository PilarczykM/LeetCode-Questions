from src.remove_element.remove_element import RemoveElement


class TestRemoveElement:
    def test_remove_element(self):
        nums = [3, 2, 2, 3]
        val = 3
        expected_output = 2
        expected_nums = [2, 2, -1, -1]

        k = RemoveElement().removeElement(nums, val)

        assert k == expected_output
        assert nums == expected_nums

    def test_remove_element_2(self):
        nums = [0, 1, 2, 2, 3, 0, 4, 2]
        val = 2
        expected_output = 5
        expected_nums = [0, 1, 4, 0, 3, -1, -1, -1]

        k = RemoveElement().removeElement(nums, val)

        assert k == expected_output
        assert nums == expected_nums
