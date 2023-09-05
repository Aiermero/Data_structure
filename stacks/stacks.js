class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        }else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
    //Platzi Challenfe succesed
    pop(){
        if(this.length === 1){
            this.top = null
            this.bottom = null
        } else if (this.length === 0){
            console.log('No hay elementos en el stack')
        }else{
            let lastItem = this.top.next
            this.top = lastItem
        }
        this.length--
        return myStack
    }
}

const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)