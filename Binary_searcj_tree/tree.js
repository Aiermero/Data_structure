class Node {
    constructor(value){
        this.left = null;
        this.rigth = null;
        this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.rigth){
                        currentNode.rigth = newNode
                        return this
                    }
                    currentNode = currentNode.rigth
                }
            }
        }
    }
    //PlatziChallenge Search method
    search(value){
        let currentNode = this.root
        if(this.root === null){
            return console.log('No hay datos en el arbol')
        }else{
            while(true || false){
                if(currentNode != null){
                    if(currentNode.value === value){
                        return true
                    }else{
                        if(value < currentNode.value){
                            currentNode = currentNode.left
                        }else{
                            currentNode = currentNode.rigth
                        }
                    }
                }else {
                    return false
                    }
                }
                }      
            }
} 
const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(8)
tree.insert(9)
tree.insert(3)
tree.insert(50)
tree.insert(20)
tree.insert(52)

