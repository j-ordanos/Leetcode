/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     let dummy_head = new ListNode(0);
     let l3 = dummy_head;
     let carry = 0;

     while(l1 != null || l2 != null){
        let l1_val = (l1 != null) ? l1.val : 0;
        let l2_val = (l2 != null) ? l2.val : 0;

        let curr_sum = l1_val + l2_val + carry;
        carry = Math.floor(curr_sum / 10);
        let last_digit = curr_sum % 10;

        let new_node = new ListNode(last_digit);
        l3.next = new_node;

        if(l1 != null) l1 = l1.next;
        if(l2 != null) l2 = l2.next;
        l3 = l3.next;
     }
     if(carry > 0){
        let new_node = new ListNode(1);
        l3.next = new_node;
        l3 = l3.next;
     }

     return dummy_head.next;
};