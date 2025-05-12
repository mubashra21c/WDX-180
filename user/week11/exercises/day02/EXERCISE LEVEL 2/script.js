fetch("https://api.thecatapi.com/v1/breeds")
.then(response=>response.json())
.then(data=>data.forEach(cat=>{
    const catNames=cat.name;
    console.log("CAT NAME:",catNames);
}))
