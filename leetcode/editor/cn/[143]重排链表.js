//给定一个单链表 L 的头节点 head ，单链表 L 表示为：
//
//
//L0 → L1 → … → Ln - 1 → Ln
//
//
// 请将其重新排列后变为：
//
//
//L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
//
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
//
//
//
// 示例 1：
//
//
//
//
//输入：head = [1,2,3,4]
//输出：[1,4,2,3]
//
// 示例 2：
//
//
//
//
//输入：head = [1,2,3,4,5]
//输出：[1,5,2,4,3]
//
//
//
// 提示：
//
//
// 链表的长度范围为 [1, 5 * 10⁴]
// 1 <= node.val <= 1000
//
// Related Topics 栈 递归 链表 双指针 👍 947 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

var reorderList = function(head) {
    let middle = findMiddle(head);
    let lastHead = reverseList(middle);
    let left = head, right = lastHead;

    while(right.next) {
        let leftNext = left.next;
        let rightNext = right.next;
        left.next = right;
        right.next = leftNext;
        left = leftNext;
        right = rightNext;
    }

    return head;
};

function findMiddle (head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList (head){
    let prev, next, curr = head;

    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
// reorderList(head)
// console.log(head)
//leetcode submit region end(Prohibit modification and deletion)
