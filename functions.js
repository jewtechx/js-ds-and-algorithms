function getMe (name){
   return name
}

const updateMe = function() {
    return "updated successfully"
}

const newMe = () => {
    return "added successfully"
}

(function deleteMe(id="1"){
   console.log(`Deleted ${id} successfuly`)
})()

console.log(getMe("Jew Larbi Danquah"))
console.log(updateMe())
console.log(newMe())
