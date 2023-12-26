const string = "Jew"
const number = 123.45
const boolean = true
const nullType = null
const undefinedType = undefined
// const symbol = Symbol()
const account = {
    id:11225319,
    pin:84046
}
const array = [1,"text", false]
const fetchData = function(){
    return "Data fetched successfully"
}

console.log(`Value: ${string}, Type:${typeof string}`)
console.log(`Value: ${number}, Type:${typeof number}`)
console.log(`Value: ${boolean}, Type:${typeof boolean}`)
console.log(`Value: ${nullType}, Type:${typeof nullType}`)
console.log(`Value: ${undefinedType}, Type:${typeof undefinedType}`)
// console.log(`Value: ${symbol}, Type:${typeof symbol}`)
console.log(`Value: ${account}, Type:${typeof account}`)
console.log(`Value: ${array}, Type:${typeof array}`)
console.log(`Value: ${fetchData}, Type:${typeof fetchData}`)