const itShouldResolve= "falsy";

const promise=new Promise((resolve,reject)=>{
    
    if (itShouldResolve=== "truthy"){
    resolve("Promise resolved");
    }
    else if(itShouldResolve==="falsy"){
        reject("Promise rejected");
    }
})

promise
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})

