1 --> 2 --> 3 --> 4 --> null 

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this

        //THE WAY I SUCCESED THE PLATZICHALLENGE
        // this.length++
        // let nextNode = this.head
        // for(let i = 1; i < this.length; i++){
        //     if(nextNode.next === null){
        //         console.log(true)
        //         nextNode.next =  new Node(value)
        //         this.tail = nextNode.next
        //         return this.head
        //     }nextNode = nextNode.next
        // }
        
    }
    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        const newNode = new Node(value)
        const firstPointer = this.getTheIndex(index - 1)
        const holdingPointer = firstPointer.next
        firstPointer.next = newNode
        newNode.next = holdingPointer

        this.length++

        return this

    }

    getTheIndex(index) {
        let counter = 0
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    //PlatziChallenge success!

    remove(index){
        if(index >= this.length){
            return this.head
        }
        const firstPointer = this.getTheIndex(index - 2)
        const holdingPointer = this.getTheIndex(index - 1).next
        console.log(this.getTheIndex(index))
        firstPointer.next = holdingPointer
        this.length--
        return this
    }

}

let myLinkedList = new MySinglyLinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)