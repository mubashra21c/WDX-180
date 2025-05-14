  /* SETUP */
  const $address = document.querySelector(".address span");
  const $balance = document.querySelector(".balance span");
  const $btcPrice = document.querySelector(".btcprice span");
  const $usd = document.querySelector(".usd span");
  const $button = document.getElementById("getBalance");
  let balance = 0;
  console.log( $address.textContent );

  /* USING PROMISES */
  //changed the event from button click to usd click just to check the working for async/await syntax
  $usd.addEventListener("click", function(event){

    fetch(`https://blockchain.info/balance?active=${$address.textContent}&cors=true `)
    .then((result)=> result.json())
    .then((data)=>{
      
       console.log( data );
      // 1 BTC === 100000000 Satoshi
      balance = data[ $address.textContent ].final_balance / 100000000; 
      $balance.textContent = balance.toFixed(2);
      
      return fetch("https://blockchain.info/ticker");
      
    })
    .then((result)=> result.json())
    .then((result)=> {
        
        // 1) Get the USD value for BTC (last) and display the conversion inside the "BTC/USD" section
        console.log(result);
        const btcusd=result.USD.last;
        console.log(btcusd.toFixed(2));
        $btcPrice.textContent=`1 BTC=$${btcusd}`;

        // 2) along with the total amount of USD dollars in the "USD" section of the UI
        const usd=btcusd*balance;
        $usd.textContent=usd.toFixed(2);

        // 3) Make sure to handle any errors
      })
      .catch((error)=>{
        console.log("Failed to fetch",error);

      })
    });
    
  /* 4) USING ASYNC/AWAIT: Refactor the callback function above into an async/await syntax: */
  $button.addEventListener("click", async function(event){
    try{
        const response= await fetch(`https://blockchain.info/balance?active=${$address.textContent}&cors=true`);
    const data= await response.json();
    console.log(data);
    balance = data[ $address.textContent ].final_balance / 100000000; 
      $balance.textContent = balance.toFixed(2);
      const response2=await fetch("https://blockchain.info/ticker");
      const data2= await response2.json();
      const btcusd=data2.USD.last;
        console.log(btcusd.toFixed(2));
        $btcPrice.textContent=`1 BTC=$${btcusd}`;
        const usd=btcusd*balance;
        $usd.textContent=usd.toFixed(2);
    }
    catch(error){
        console.log("Failed to fetch",error);
    }
    


    
  });  