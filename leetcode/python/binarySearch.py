class Solution(object):
    def search(self, nums, target):
       
        start = 0
        end = len(nums) -1 
        while (start <= end):
            mid = math.trunc(end-start / 2) // need python 3 + to work
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                end = mid - 1
            else:
                start = mid + 1
        return -1
                





s = Solution()
print(s.search([1,2,3,4],2))