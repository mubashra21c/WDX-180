function waitForResult(value, ms = 1000) {
    console.log("waiting for result...");
    return new Promise(function (resolve, reject) {
      function display() {
        resolve(value);
      }
      setTimeout(display, ms);
    });
  }

//   /* waitForResult() is a promise-based asynchronous function
//     which accepts one value as an argument and returns it after 1 second. 
//   */

//   waitForResult(1)
//     .then(function (result) {
//       console.log(result);
//       return waitForResult(2);
//     })
//     .then(function (result) {
//       console.log(result);
//       return waitForResult(3);
//     })
//     .then(function (result) {
//       console.log(result);
//       return waitForResult(4);
//     })
//     .then(function (result) {
//       console.log(result);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

  /* EXERCISE: Convert the above code to an async function which uses 
    the await keyword to wait for the result of each call to waitForResult().
    You should see the same result as the above code after calling the async function:
    1, 2, 3, 4
    Be sure to comment the above code before continuing. 
  */

    async function convert(){
        try{
        const result1=await waitForResult(1);
        console.log(result1);
        const result2=await waitForResult(2);
        console.log(result2);
        const result3=await waitForResult(3);
        console.log(result3);
        const result4=await waitForResult(4);
        console.log(result4);
        }
        catch(error){
            console.log("error:",error);
        }
    }

    convert();