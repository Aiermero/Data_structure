class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor(){
        this.last = null;
        this.first = null;
        this.length = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.last = newNode
            this.first = newNode
            this.length++
            return this
        }else {
            this.last.next = newNode
            this.last = newNode
            this.length++
        }
    }
    dequeue(){
        const newFirst = this.first.next
        this.first = newFirst
        this.length--
        return this
    }
    peek(){
        return this.first
    }
}

const myQueue = new Queue()