/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE
const firstP=document.querySelector('p').outerHTML;
console.log(firstP);

const par1=document.querySelector('#paragraph1');
console.log(par1);
par1.setAttribute('class','para');

const par2=document.querySelector('#paragraph2');
console.log(par2);
par2.setAttribute('class','para');

const par3=document.querySelector('#paragraph3');
console.log(par3);
par3.setAttribute('class','para');

const par4=document.querySelector('#paragraph4');
console.log(par4);
par4.setAttribute('class','para');

const pAll=document.querySelectorAll('p');
console.log(pAll);




