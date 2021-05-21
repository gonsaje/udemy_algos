/* 
Define Singly Linked List
Compare and Contrast with Arrays and LinkedLists

Implement insertion,removal
\*/


// LinkedList: contains a head, tail, and length property

// Linked Lists consist of nodes and each node has a value and a pointer to another node or null

// head                 tail
// [4] => [6] => [8] => [2] => null
// length = 4

// in order to get to a certain Node, you have to start from head and keep asking for the next Node.


// Comparisons with Arrays:

// Lists:
// - Do not have indexes.
// - Connected via nodes with next pointer
// - No Random Access

// Array:
// - Indexed in order
// Insertion and deletion can be expensive
// - Can quickly be accessed at a specifc index


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let listNode = new Node(val);

        if (!this.head) {
            this.head = listNode;
            this.tail = this.head;
        } else {
            this.tail.next = listNode;
            this.tail = listNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let curr = this.head;

        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }

        return "done"
    }
    
    pop() {
        if (this.head) {
            if (!this.head) return undefined;

            let prev = this.head;
            let temp = prev.next;

            while (temp !== this.tail) {
                prev = temp;
                temp = prev.next;
            }
            prev.next = null;
            this.tail = prev;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return temp;
        }
    }

    shift() {
        if (!this.head) return undefined;

        let prev = this.head;
        let next = prev.next;
        this.head = next;
        prev.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return prev;
    }

    unshift(val) {
        let listNode = new Node(val);

        if (!this.head) {
            this.head = listNode;
            this.tail = listNode;
        } else { // the else is necessary to make sure one or the other happens, not potentially both
            listNode.next = this.head;
            this.head = listNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let count = 0;
        let temp = this.head;

        while (count < index) {
            temp = temp.next;
            count++;
        }

        return temp;
    }

    set(index, value) {
        let node = this.get(index);

        if (node) {
            node.val = value;
            // return false;
        }
        //return true;
        return node;
    }



}

let list = new LinkedList();
list.push("HELLO");
list.push("GOODBYE")
list.push(45)
list.push(4555)
list.push(3000)
list.push("puppies")
console.log(list);
console.log(" ");
console.log(list.pop());
console.log(" ");
console.log(list)
console.log(" ");
console.log(list.shift());
console.log(" ");
console.log(list);
console.log(" ");
console.log(list.unshift(90));
console.log(" ");
console.log(list.shift());
console.log(" ");
console.log(list);
console.log(" ");
console.log(list.get(3));
console.log(" ")
console.log(list.set(1, "Changed"));
console.log(" ")
console.log(list);



// let first = new Node("Hi");
// first.next = new Node("Hi there");
// first.next.next = new Node("how are you");
// first.next.next.next = new Node("I'm fine thanks");
// console.log(first);