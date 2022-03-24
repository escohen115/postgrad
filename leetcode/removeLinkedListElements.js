# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
       
        if head:
            
            while head and head.val == val:
                    head = head.next
        
            prev = head
        
            if head and head.next:
                current = head.next
        
                while current:

                    if current.val == val:
                        prev.next = current.next
                        
                    if current.val != val:
                        prev = prev.next


                    current = current.next
            
            
            
        
        return head
            
            
                
    
                