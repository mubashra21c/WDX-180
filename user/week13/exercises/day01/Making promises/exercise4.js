console.log("wait for 3 seconds");
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("task resolved");
    },3000)
})

promise
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})