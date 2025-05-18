
function squarePromise(numberPromise){
    return numberPromise
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
      })
      .catch((error)=>{
         return Promise.reject(error);
      });
  }
//tests

//1.valid number
//const numberPromise=Promise.resolve(5);

//2.valid string
 //const numberPromise=Promise.resolve("1234");

//3.invalid string
//const numberPromise=Promise.resolve("asdf");

//4.reject input promise
const numberPromise=Promise.reject("error occured");

squarePromise(numberPromise)
.then(result=>
    console.log("square:", result)
)
.catch(error=>console.log("Error:",error));