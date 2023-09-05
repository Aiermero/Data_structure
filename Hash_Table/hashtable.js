class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }
    hashMethod(key) {
        let hash = 0
        for ( let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    set(key, value){
        const address = this.hashMethod(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }
    get(key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }
    //Platzi challenge
    delete(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    currentBucket.splice(i,1)
                }
            }return this.data
        }return undefined
    }
    keys(){
        const keysList = []
        const arrayFlat = this.data.flat(1)
        for(let i = 0; i < arrayFlat.length; i++){
            keysList.push(arrayFlat[i][0])
        }
        return keys
    }
}

const myHashTable = new HashTable(50)

myHashTable.set('Elam',1997)
myHashTable.set('Josue',1997)
myHashTable.set('Daniela',1997)
