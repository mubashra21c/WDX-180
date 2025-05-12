

fetch("https://restcountries.com/v2/all")
.then(response=>response.json())
.then(data=>{
    
    data.forEach(country => {
        console.log("NAME:",country.name);
        console.log("CAPITAL:",country.capital);
        country.languages.forEach(lang=>console.log("LANGUAGE:",lang.name));
        // console.log("LANGUAGES:",language.join(", "));
        console.log("population:",country.population);
        console.log("AREA:",country.area);
        console.log("COUNTRY AREA:",country.area);
        

    })

    console.log("TOP 10 LARGEST COUNTRIES");
    const sorted=data.sort((a,b)=>b.area-a.area);
    const top10=sorted.slice(0,10);
    top10.forEach(country=>{
        
        console.log(`${country.name}:${country.area}`);
    })
        
    })

.catch(error=>{
    console.log("error");
})
