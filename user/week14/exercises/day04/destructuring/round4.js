var object1 = {
    user: 'elvis',
    address: {
      city: 'denver',
      state: 'colorado'
    },
    id: 1
  }

  const{user,address:{city,state},id}=object1;
  console.log(user);
  //console.log(address);
  console.log(city);
  console.log(state);
  console.log(id);