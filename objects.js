const user = {
    name:"Jew Larbi",
    yearOfBirth:2000,
    calculateAge: function(){
        const date = new Date()

       return date.getFullYear() - this.yearOfBirth
    },
}
console.log(user.name)
console.log(user.calculateAge())