class Node {
    constructor(val, next) {
        this.val = val===undefined ? 0 : val;
        this.next = next===undefined ? null : next;
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
// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null && list2 === null) {
//         return list1;
//     }
//
//     let mergedList = new Node(null);
//
//     let p1 = list1;
//     let p2 = list2;
//
//     const addToMergedList = (val) => {
//         const newNode = new Node(val);
//
//         if (!mergedList.val) {
//             mergedList = newNode;
//         } else {
//             let current = mergedList;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//
//     while (p1 || p2) {
//         if (p1 && p2) {
//             if (p1.val <= p2.val) {
//                 addToMergedList(p1.val);
//                 p1 = p1.next;
//             } else {
//                 addToMergedList(p2.val);
//                 p2 = p2.next;
//             }
//         } else if (p1 && !p2) {
//             addToMergedList(p1.val);
//             p1 = p1.next;
//         } else {
//             addToMergedList(p2.val);
//             p2 = p2.next;
//         }
//     }
//
//     return mergedList;
// };


// test 1
const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

// test 2
// const l1 = { val: null, next: null };
// const l2 = { val: null, next: null };

// test 3
// const l1 = { val: null, next: null };
// const l2 = { val: 0, next: null };

function printList (ml) {
    let list = ''

    let curr = ml;

    while(curr.next) {
        list = list + curr.val + ' -> ';
        curr = curr.next;
    }

    list = list + curr.val;
    console.log('List: ', list);

}

const result = mergeTwoLists(l1, l2);
printList(result)
