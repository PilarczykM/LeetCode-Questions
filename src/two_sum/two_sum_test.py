from src.two_sum.two_sum import TwoSum


class TestTwoSum_Mine:
    def test_example_one(self):
        nums = [2, 7, 11, 15]
        target = 9
        output = [0, 1]

        assert output == TwoSum().twoSum(nums, target)

    def test_example_two(self):
        nums = [3, 2, 4]
        target = 6
        output = [1, 2]

        assert output == TwoSum().twoSum(nums, target)

    def test_example_three(self):
        nums = [3, 3]
        target = 6
        output = [0, 1]

        assert output == TwoSum().twoSum(nums, target)


class TestTwoSum_GPT:
    def test_example_one(self):
        nums = [2, 7, 11, 15]
        target = 9
        output = [0, 1]

        assert output == TwoSum().twoSum_3(nums, target)

    def test_example_two(self):
        nums = [3, 2, 4]
        target = 6
        output = [1, 2]

        assert output == TwoSum().twoSum_3(nums, target)

    def test_example_three(self):
        nums = [3, 3]
        target = 6
        output = [0, 1]

        assert output == TwoSum().twoSum_3(nums, target)
