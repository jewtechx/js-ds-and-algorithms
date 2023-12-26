const farmer = {
    name:"Kwadwo Manu",
    age:50,
    items:["Cutlass","tractor","hoe"],
    workRate:function(){
        return this.age * this.items.length
    }
}

console.log(farmer.workRate())