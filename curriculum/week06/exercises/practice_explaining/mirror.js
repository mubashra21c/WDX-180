'use strict';

/* Mirror
   This programs mirrors the input.

  Data In:
    any text

  Data Out:
    the mirrored input


  Test Cases:
  '1234' -> '4321|1234'
  'hello' ->'olleh|hello'



*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
