'use strict';

/* Remove Spaces
    This program remove spaces from the input if any.

  Data In:
   any text


  Data Out:
   input along with spaceless input
   


  Test Cases:
   'hello world' -> 'before:hello world'
                    'after:helloworld'

    'hello' -> 'before:hello'
                    'after:hello'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
