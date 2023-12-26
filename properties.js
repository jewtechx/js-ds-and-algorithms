//strings
const thing  = "love"


 console.log(thing.charAt(0))
 console.log( thing.concat(" heals"))
 console.log( thing.indexOf("h"))
 console.log(thing.startsWith("l"))
 console.log(thing.endsWith("s"))
 console.log(thing.split())
 console.log(thing.slice(-1))


 console.log(Math.pow(2,3))
 console.log(Math.sqrt(12))
 console.log(Math.min(12,2))
 console.log(Math.max(12,2))
 console.log(Math.floor(123.53))
 console.log(Math.ceil(123.53))
 console.log(Math.round(123.53))
 console.log(Math.random())


 const number = 123.45

 console.log(number.toFixed())
 console.log(number.toPrecision())
 console.log(number.toString())

 const bool = true
 console.log(bool.toString())


 const date = new Date()
 console.log(date.getDate())
 console.log(date.getFullYear())
 console.log(date.getMonth())
 console.log(date.getdUTCDay())


 const todos = ["code","sleep","eat",]

 console.log(todos.filter((todo) => 
    // todo.startsWith("e")
    todo.startsWith("c")
    ))

console.log(todos.map((todo) => {
    return (
        `<h1>${todo}</h1>`
    )
}))

console.log(todos.find((code) => code.startsWith("s")))

console.log(todos.every((todo) => todo.length < 10))

console.log(todos.some((todo) => todo.length == 7))

console.log(todos.sort())
console.log(todos.slice(-1))
console.log(todos.splice(0,1))
console.log(todos.reduce((todos) => todos.indexOf("code")))
console.log(todos.forEach((todo) => {
    for(let i = 0; i < todo.length; i++){
        return todo[i] = "a"
    }
}))