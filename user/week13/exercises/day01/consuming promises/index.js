const promise=new Promise((resolve,reject)=>{
    //resolve(" task resolved");
    reject("task rejected");
})

function consumer(value){
    console.log(value);
    console.log(" Consumer called");
}

function handler(error){
    console.log(error);
    console.log("handler called");
}

promise
.then(consumer)
.catch(handler)