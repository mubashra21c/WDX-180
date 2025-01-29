'use strict';

/* Flip Five
   This program reverses an input only if it is 5 characters long.

  Data In:
      any text

  Data Out:
      the reversed input if its 5 characters long.
      'nope, try again.' if it is not 5 characters long.

  Test Cases:
  '1234'-> 'nope, try again.'
  'abcde'-> 'edcba'
  'hello'->'olleh'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
