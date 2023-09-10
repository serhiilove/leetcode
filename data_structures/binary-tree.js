/* Class containing left and right child of current node
and key value */
class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


/*  The tree

        1
     /    \
    2      3
   / \    / \
  4   5  6   7

*/

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(JSON.stringify(root));



