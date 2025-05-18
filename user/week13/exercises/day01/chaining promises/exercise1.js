function flatMapPromise(promise, asyncTransformer){
    return new Promise((resolve, reject) => {
      promise
        .then((value)=>{
            asyncTransformer(value)
            .then(resolve)
            .catch(reject);
        });
    });
  }

  flatMapPromise(Promise.resolve(10),x=>Promise.resolve(x*2))
  .then(console.log);
