function mapPromise(promise, transformer){
    return new Promise((resolve, reject) => {
      /* IMPLEMENT ME!! */
      promise
      .then((value)=>{
        try{
          const transformedValue=transformer(value);
        resolve (transformedValue);
        }
        catch(error){
          reject (error);
        }
      })
      .catch((error)=>{
        reject (error);
      });
    });
  }
  

  const originalPromise=Promise.resolve(10);
  function transformer(value){
    if(value===10){
      throw new Error("Transformer failed");
    }
    return value*2;
  }
  mapPromise(originalPromise,transformer)
  .then(result=>console.log(result))
  .catch(error=>console.log(error));