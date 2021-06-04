class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){

        if (!this.head) return undefined

        let current = this.head
        let secondLast = null

        while (current){
            current.next !== null ? secondLast = current : null
            current = current.next
        }
        this.tail = secondLast
        this.tail.next = null
        this.length--
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if (this.head === null) return undefined
        let temp = this.head
        this.head = temp.next
        this.length --
        temp.next = null
        return temp
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.pop()