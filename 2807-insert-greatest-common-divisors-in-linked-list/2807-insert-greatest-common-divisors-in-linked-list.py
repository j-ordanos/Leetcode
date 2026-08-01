# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        
        while current and current.next:
            gcd_val = math.gcd(current.val, current.next.val)
            
            new_node = ListNode(gcd_val, current.next)
            current.next = new_node
            current = new_node.next
            
        return head