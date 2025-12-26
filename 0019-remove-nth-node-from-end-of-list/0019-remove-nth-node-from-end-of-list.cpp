/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
       ListNode* dummy = new ListNode(0);
       dummy->next = head;

       ListNode* left = dummy;
       ListNode* right = dummy;

       //move right node n + 1 steps ahead
       for(int i = 0; i < n + 1; ++i){
            right = right->next;
       }

       //move both pointers until right pointer reaches the end
       while(right != NULL){
            right = right->next;
            left = left->next;
       }

       //remove the nth node from end
       left->next = left->next->next;
       return dummy->next;
    }
};