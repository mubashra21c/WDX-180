

  function squarePromise(promise){
    return promise
      .then((value)=>{
        if(typeof value==='number'){
            return value*value;
        }
        if(typeof value==='string'){
            const num=Number(value);
            if(!isNaN(num)){
                return num*num;
            }
            else{
                throw new Error(`Cannot convert ${value} to a number!`);
            }
        }
        else{
            throw new Error("resolved value is not a number");
        }
      });
    }

    function squarePromiseOrZero(promise){
      return squarePromise(promise)
        .catch(()=>{
          return 0;
        });
    }


 //tests

//1.valid number
//const promise=Promise.resolve(5);

//2.valid string
 //const promise=Promise.resolve("1234");

//3.invalid string
//const promise=Promise.resolve("asdf");

//4.reject input promise
const promise=Promise.reject("error occured");



    squarePromiseOrZero(promise)
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    })