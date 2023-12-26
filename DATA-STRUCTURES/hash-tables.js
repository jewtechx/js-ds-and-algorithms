var hash = (string,max) => {
    var hash = 0;
    for(var i = 0; i < string.length; i++){
        hash += string.charCodeAt(i)
    }
    return hash % max 
}


//main hashtable functions

let HashTable = function(){
    let storage = []
    const storageLimit = 24

    this.print = function(){
        console.log(storage)
    }

    this.add = function(key,value){
        var index = hash(key,storageLimit)
            if(storage[index] === undefined){
                storage[index] = [
                    [key,value]
                ]
            }else{
                var inserted = false
                for(var i = 0; i < storage[index]; i++){
                    if(storage[index][i][0] === key){
                        storage[index][i][1] = value
                        inserted = true
                    }
                }
                if(inserted === false){
                    storage[index].push([key,value])
                }
            }
    }

    this.remove = function(key){
        var index = hash(key,storageLimit)
        if(storage[index].length === 1 && storage[index][0][0] == key){
            delete storage[index]

        }else{
            for(var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i][1]
                }
            }
        }
    }

    this.lookup = function(key){
        var index = hash(key,storageLimit)
        if(storage[index] === undefined){
            return undefined
        }else{
            for(var i = 0; i < storage[index.length]; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i][1]
                                }
            }
        }
    }
}


console.log(hash("Yaw",12))

let ht = new HashTable()
ht.add("Canada","country")
ht.add("Spartans","game")
console.log(ht.lookup("Canada"))
ht.print()