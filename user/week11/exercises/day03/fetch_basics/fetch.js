/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 * 
 * Complete the challenges found below!
 *  
 * */

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and: 
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and: 
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW
fetch("https://restcountries.com/v2/all")
.then(response=>response.json())
.then(data=>{
    const uniqueLang=[];
    data.forEach(country=>{
    console.log(`country name: ${country.name}`);
    console.log(`country capital: ${country.capital}`);
    console.log(`country population: ${country.population}`);
    console.log("country languages:")
    country.languages.forEach(lang=>{
         console.log(lang.name);
         if(!uniqueLang.includes(lang.name)){
         uniqueLang.push(lang.name);
         }
         
    })
    console.log(`country area: ${country.area}`);
    
})
console.log(`TOTAL OFFICIAL LANGUAGES USED: ${uniqueLang.length}`);

const sorted=data.sort((a,b)=>b.area-a.area);
    const top10=sorted.slice(0,10);
    console.log("TOP 10 LARGEST COUNTRIES");
    top10.forEach(country=>{
        console.log(`country name: ${country.name} country area: ${country.area}`);
    })

})


//2
fetch("https://api.thecatapi.com/v1/breeds")
.then(response=>response.json())
.then(data=>{
    
    data.forEach(cat=>{
        const catName=cat.name;
        console.log(`CAT NAME: ${catName}`);
        const [min,max]=cat.weight.metric.split("-").map(Number);
        const avg=(max+min)/2;
        console.log(`Average weight of ${cat.name} is ${avg}kg`);
    })
})