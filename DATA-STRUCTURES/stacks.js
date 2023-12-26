//function push,pop,peak,length

const letters = []

const word = "madam"

var rword = ""

for(var i = 0; i < word.length; i++){
    letters.push(word[i])
}

for(var i = 0; i < word.length; i++){
    rword += letters.pop()
}

if(word == rword){
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
}



//creating a stack
class Stack {
    constructor() {
        this.count = 0
        this.storage = []
}
        //Add a value onto the end of the stack
        push (value) {
            this.storage[this.count] = value
            this.count++
        }

        //Removes and returns the value at the end of the stack
        pop() {
            if (this.count === 0) {
                return undefined
            }
            this.count--
            var result = this.storage[this.count]
            delete this.storage[this.count]
            return result
        }

        size() {
            return this.count
        }

        peak() {
            return this.storage[this.count - 1]
        }
    
}

var stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.size())