
from tkinter import SOLID


class Solution(object):



    def isPalindrome(self, x):
    
        if x < 0: return False
        
        y = x
        counter = 0
        place = 10
        while x > 0:
            x -= x % place
            place = place * 10
            counter +=1
    
        leftplace = 1
        rightplace = 10**(counter-1)
        counter -= 1
        
        while counter > 0:
           
            left = y / leftplace % 10
            right = (y / rightplace) % 10
            
            if left != right: return False
            
            leftplace = leftplace * 10
            rightplace = rightplace / 10
           
            counter -= 1
            
        return True


 
x = Solution()
print(x.isPalindrome(14541))