const ninetiesToys = [
    {
        name: "Tamagotchi",
        releaseYear: 1996,
        price: 15.99
    },
    {
        name: "Furby",
        releaseYear: 1998,
        price: 29.99
    },
    {
        name: "Super Soaker",
        releaseYear: 1989,
        price: 19.99
    },
    {
        name: "Pogs",
        releaseYear: 1991,
        price: 5.99
    },
    {
        name: "Game Boy",
        releaseYear: 1989,
        price: 89.99
    }
  ];

  const eightiesToys = [
    {
      name: "Rubik's Cube",
      releaseYear: 1980,
      price: 9.99
    },
    {
      name: "Transformers",
      releaseYear: 1984,
      price: 19.99
    },
    {
      name: "My Little Pony",
      releaseYear: 1983,
      price: 12.99
    },
    {
      name: "Cabbage Patch Kids",
      releaseYear: 1982,
      price: 24.99
    },
    {
      name: "Nintendo Entertainment System",
      releaseYear: 1985,
      price: 89.99
    },
    {
      name: "He-Man and the Masters of the Universe",
      releaseYear: 1982,
      price: 14.99
    }
  ];

  function findCheapToys(toysList){
    let arr=[];
    toysList.forEach(function(item){
        let prices=item.price;
        if(prices<20){
            arr.push(item.name)
        }
    })
    console.log(arr);
  }
  findCheapToys(eightiesToys);