class Node {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        const node = new Node(val);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next
            }

            curr.next = node;
        }
        this.size++;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    const ll = new LinkedList();

    let curr1 = list1;
    let curr2 = list2;

    while (curr1.next || curr2.next) {
        if (curr1.next && !curr2.next) {
            ll.add(curr1.val);
            curr1 = curr1.next;
        } else if (!curr1.next && curr2.next) {
            ll.add(curr2.val);
            curr2 = curr2.next;
        } else {
            if (curr1.val <= curr2.val) {
                ll.add(curr1.val);
                curr1 = curr1.next;
            } else {
                ll.add(curr2.val);
                curr2 = curr2.next;
            }
        }
    }

    ll.add(Math.min(curr1.val, curr2.val));
    ll.add(Math.max(curr1.val, curr2.val));

    return ll.head
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null }}}; // 1 -> 2 -> 4
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null }}}; // 1 -> 3 => 4

console.log(mergeTwoLists(l1, l2));

