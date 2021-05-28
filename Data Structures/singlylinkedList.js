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
        // create a new node using the value passed to the function
        let listNode = new Node(val);

        // if there is no head property on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = listNode;
            this.tail = this.head;
        } else { // otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            this.tail.next = listNode;
            this.tail = listNode;
        }
        this.length++; // increment length by one
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
        // If there are no nodes in the list, return undefined
        if (!this.head) return undefined;

        let prev = this.head;
        let temp = prev.next;
        // loop thru the list until you reach the tail
        while (temp !== this.tail) {
            prev = temp;
            temp = prev.next;
        }
        prev.next = null; // set the next property of the 2nd to last node to null
        this.tail = prev;// set the tail to be the 2nd to last node
        this.length--; // decrement length of list by 1

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp; // return value of node removed
    }

    shift() {
        // if there are no nodes return undefined
        if (!this.head) return undefined;

        let prev = this.head; // store current head prop to var
        let next = prev.next;
        this.head = next; // set the head prop to be the current heads next property
        prev.next = null;
        this.length--; // decrement the length by 1 
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return prev; // return removed node
    }

    unshift(val) {
        // Create a new node using the value passed to the function
        let listNode = new Node(val);

        // If there is no head prop then set head and tail to be the new node
        if (!this.head) {
            this.head = listNode;
            this.tail = listNode;
        } else { // the else is necessary to make sure one or the other happens, not potentially both
            // Otherwise set the new node next prop to be current head and set head of the list to the new node
            listNode.next = this.head;
            this.head = listNode;
        }

        this.length++; // increment length by 1
        return this;
    }

    get(index) {
        // If the index is less than zero or greater than or equal to length of the list, return null
        if (index < 0 || index >= this.length) return undefined;

        let count = 0;
        let temp = this.head;

        // loop thru the list until you reach the index and return the node at that specific index
        while (count < index) {
            temp = temp.next;
            count++;
        }

        return temp;
    }

    set(index, value) {
        // use get gunction to find the specific node
        let node = this.get(index);
        // if node is not found return false/undefined/null
        if (node !== undefined) { // if found, set the value of the node to be the value passed to the funciton and return true
            node.val = value;
        }

        return node;
    }


    insert(value, index) {
        let node = new Node(value);
        // if index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false;
        // if the index is the same as the length, push a new node to the end of the list
        if (index === this.length) return this.push(node);
        // If the index is 0, unshift a new node to the start of the list
        if (index === 0) return this.unshift(node);
        // Otherwise using the get method, access the node at the index - 1
            // set the next prop on the node to be the new node
            // set the nex prop of the new node to be the previous next 
        let temp = this.get(index - 1);
        node.next = temp.next;
        temp.next = node;
        this.length++;
        // Increment length
        // return true/list
        return this;
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
// console.log(list)
console.log(list.get(2));
console.log(list.insert(2,2));
console.log(list.get(2));
// console.log(" ");
// console.log(list.shift());
// console.log(" ");
// console.log(list);
// console.log(" ");
// console.log(list.unshift(90));
// console.log(" ");
// console.log(list.shift());
// console.log(" ");
// console.log(list);
// console.log(" ");
// console.log(list.get(3));
// console.log(" ")
// console.log(list.set(1, "Changed"));
// console.log(" ")
// console.log(list);



// let first = new Node("Hi");
// first.next = new Node("Hi there");
// first.next.next = new Node("how are you");
// first.next.next.next = new Node("I'm fine thanks");
// console.log(first);