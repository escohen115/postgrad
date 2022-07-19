
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0
        let prime = 31
        for (let i=0; i < Math.min(100, key.length;i++)){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.key.length
        }
        return total
    }
    set(key, value){
        let index = this._hash(key)
        return index
    }
}