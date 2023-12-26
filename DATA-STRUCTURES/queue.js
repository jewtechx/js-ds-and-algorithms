class Queue {
    constructor (){
        this.collection= []
    }

    print(){
        return this.collection
    }

    enqueue(e){
        this.collection.push(e)
    }
    
    dequeue(){
        return this.collection.shift()
    }

    front(){
        return this.collection[0]
    }
    size(){
        return this.collection.length
    }
    isEmpty(){
        return this.collection.length === 0
    }
}

var q = new Queue()
q.enqueue("Code")
q.enqueue("Learn")
q.enqueue("Take drugs")
q.enqueue("Sleep")

q.dequeue()

console.log(q.print())



//priority queue

class PriorityQueue{
    constructor(){
        this.collection = [];
    }

    print_collection() {
        return this.collection
    }

    enqueue(element){
        if(this.isEmpty){
            var added = false
            for(let i=0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                   this.collection.splice(i,0,element)
                    added = true
                    break
                }
            }

            if(!added){
                this.collection.push(element)
            }
        }else{
        }
    }

    dequeue(){
        let value = this.collection.shift();
        return value[0]
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length
    }

    isEmpty(){
        if(this.collection.length == 0){
            return true
        }
        else{
            return false
        }
    }
}


let pq = new PriorityQueue()

const elements = [
    ["Kwame Bonto",2],["Yaw Safo",1],["Kelvin Omaboe",3],["Atta Koo",0]
]

for(let i=0; i < elements.length; i++){
    pq.enqueue(elements[i])
}
console.log(pq.print_collection())

