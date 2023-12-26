const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(1 < 10){
            resolve("Success")
        }else{
            reject("failure")
        }
    },2000)
})

promise.then(res => console.log(res)).catch(err => console.log(err))