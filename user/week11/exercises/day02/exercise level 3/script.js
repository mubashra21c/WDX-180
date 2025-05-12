
fetch("https://api.thecatapi.com/v1/breeds")
.then(response=>response.json())
.then(data=>data.forEach(cat=>{
    const [min,max]=cat.weight.metric.split("-").map(Number);
       let sum=0;
        sum=min+max;
        // console.log(sum);
        const avg=sum/2;
        const catName=cat.name;
    console.log(`breed ${catName} |Average weight:${avg} kg`);
    })
)
