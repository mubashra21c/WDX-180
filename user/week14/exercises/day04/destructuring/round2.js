var items = ['apple', 'banana', 'pear']

// Currently, I would get the following returns:
//console.log(a) => 'apple'
//console.log(b) => 'banana'

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
//console.log(a) => 'banana';
//console.log(b) => 'apple';
let[a,b]=items;
[a,b]=[b,a];
console.log(a);
console.log(b);