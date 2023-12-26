//sets

class Sets {
    constructor(){
        this.collection = []
    }

    has(element) {
        return (this.collection.indexOf(element) !== -1)
    }

    values(){
        return this.collection
    }

    //adds an element to the set
    add(element){
        if(!this.has(element)){
            this.collection.push(element)
            return true
        }else{
            return false
        }
    }

    //removes an element from the set
    remove(element){
        if(this.has(element)){
            var index = collection.indexOf(element)
            this.collection.splice(index)
            return true
        }else{
            return false
        }
    }

    size(){
        return this.collection.length
    }

    //this method will return the union of two sets
    union(otherSet){
        var unionSet = new Sets()
        var firstSet = this.values()
        var secondSet = otherSet.values()
        
        firstSet.forEach(element => {
            unionSet.add(element)
        });
        secondSet.forEach(element => {
            unionSet.add(element)
        });
        return unionSet
    }

    //this method will return the intersection of two sets as a new set
    intersection(otherSet){
        var intersection = new Sets()
        var firstSet = this.values()
        firstSet.forEach(e => {
            if(otherSet.has(e)){
                intersection.add(e)
            }
        })
        return intersection
    }
    
    //this method will check the difference between two sets and return a new set
    difference(otherSet){
        var difference = new Sets()
        var firstSet = this.values()
        firstSet.forEach(e => {
            if(!otherSet.has(e)){
                difference.add(e)
            }
        })
        return difference
        
    }
    
    //this will test if a set is a subset of a different set
    subset(otherSet){
        var firstSet = this.values()
        return firstSet.every(value => {
            return otherSet.has(value)
        })
    }
}

var setA = new Sets()
var setB = new Sets()

setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")

console.log(setA.subset(setB))
console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))