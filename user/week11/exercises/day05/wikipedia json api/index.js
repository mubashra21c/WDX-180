function fetchBookByAuthor(author){
    
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author ); 
    // READ MORE ABOUT "encodeURIComponent": https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
    
    return fetch(URL)
    .then(function(res){ return res.json(); });
    
  };

  fetchBookByAuthor("Herman Melville")
  .then( data =>{
    // TODO: Display data in the page...
    //console.log(data);
    const pages=data.query.pages;
    //console.log(pages);
    const obj=Object.keys(pages);
    const content=(pages[obj].extract);
    
    
  })
  .catch( error =>{
    console.log(error);
  })

  // EXERCISE 1: Display the results in the page
  // EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
  async function book(){
   try{
    const data= await fetchBookByAuthor("Herman Melville");
    const pages=data.query.pages;
    const obj=Object.keys(pages);
    const content=(pages[obj].extract);
    // const div=document.querySelector('#content');
    // div.innerHTML=content;
   }
   catch(error){
    console.log("error",error);
   }

  }
  book();



//   async function book(){
//     try{
//     const result=await fetchBookByAuthor("Herman Melville");
//     console.log(result);
//     }
//     catch(error){
//         console.log("error",error);
//     }
//   }
  // EXERCISE 3: Create a fetchBookByTitle function using async/await and test it with fetchBookByTitle("Moby Dick");
  // EXERCISE 4: Display the Book contents in the page


  async function fetchBookByTitle(title){
    try{
      const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( title ); 
    
    const response= await fetch(URL);
    const data= await response.json();
   // console.log(data);
    return data;
    
    }
    catch(error){
      console.log("error",error);
    }

  }


  async function titlebook(){
    try{
      const res= await fetchBookByTitle("Moby Dick");
      console.log(res);
      const pages=res.query.pages;
      const obj=Object.keys(pages);
      const content=(pages[obj].extract);
      console.log(content);
    const div=document.querySelector('#content');
    div.innerHTML=content;
      
    }
    catch(error){
      console.log("error",error);
    }
  }
  titlebook();
  