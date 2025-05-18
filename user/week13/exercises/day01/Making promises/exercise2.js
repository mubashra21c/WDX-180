const promise= Promise.reject("Boo");

promise.catch((value)=>{
console.log(value);
})