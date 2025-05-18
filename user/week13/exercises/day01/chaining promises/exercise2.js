function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
    return firstPromise.then((value)=>{
        return slowAsyncProcess(value);
    });
  }



  chainTwoAsyncProcesses(Promise.resolve(5),(n) => new Promise((resolve) => setTimeout(() => resolve(n * 2), 3000)))
  .then((result)=>{
    console.log(result);
  })