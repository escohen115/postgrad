# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        a = head
    
        if head:
            if head.next:
                a = head
                b = head.next
                c = head.next.next

                head = b 
                head.next = a
                head.next.next = c
                a = head.next 
                
                while a and a.next and a.next.next:  
                    b = a.next  
                    c = b.next 
                    d = c.next 
                    a.next = c 
                    c.next = b
                    b.next = d 
                    a = c.next
        return head
    
            

        
  
            