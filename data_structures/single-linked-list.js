class Node {
    constructor(element, next) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node= new Node(element);

        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            console.log('Enter valid element index');
        } else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            if (index === 0) {
                this.head = node;
                this.head.next = curr;
            } else {
                let i = 0;

                while (i < index) {
                    prev = curr;
                    curr = curr.next;
                    i++;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size - 1) {
            return console.log('Enter valid element index');
        } else {
            let curr, prev;
            curr = this.head;

            if (index === 0) {
                this.head = curr.next;
            } else {
                let i = 0;

                while (i < index) {
                    prev = curr
                    curr = curr.next;
                    i++;
                }

                prev.next = curr.next;
            }

            this.size--;
            return curr.element;
        }
    }

    removeElement(element) {
        let prev= null;
        let curr = this.head;

        while (curr.next && curr.element !== element) {
            prev = curr;
            curr = curr.next;
        }

        if (curr.element === element) {
            if (prev) {
                prev.next = curr.next;
            } else {
                this.head = curr.next
            }

            this.size--;
            return curr.element;
        } else {
            return -1;
        }
    }

    isEmptyList() {
        return this.size === 0;
    }

    printList() {
        let list = ''

        if (this.isEmptyList()) {
            console.log('List is empty');
        } else {
            let curr = this.head;

            while(curr.next) {
                list = list + curr.element + ' -> ';
                curr = curr.next;
            }

            list = list + curr.element;
            console.log('List: ', list);
            console.log('Size: ', this.size);
        }
    }
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.printList();

console.log(ll.removeElement(3));
ll.printList();




