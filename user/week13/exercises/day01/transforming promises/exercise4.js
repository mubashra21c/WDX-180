

function switcheroo(promise){
    return new Promise((resolve,reject)=>{
        promise.then((value)=>{
            reject(value);
        })
        .catch((error)=>{
            resolve(error);
        });
    }) 
  }

 // const promise=Promise.resolve(10);
  const promise=Promise.reject("hi");

  switcheroo(promise)
  .then((value)=>{
    console.log("resolves with ", value);
  })
  .catch((error)=>{
    console.log("rejects with ",error);
  })
  