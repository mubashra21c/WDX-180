let answer= prompt(" Question: Who created JavaScript? \n A) Brendan Eich \n B) Bill Gates\n C) Mark Zuckerberg\n Please select the correct option (A, B, or C).");
answer=answer.toLowerCase();
console.log(answer);
console.log(answer.length);
answer=answer.trim();
console.log(answer.length);
if (answer=='a'){
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
}
else if (answer=='b') {
    alert("Nope. He lead the development of the Windows Operating System");
    
} 
else if (answer=='c') {
    alert("Nope. He just came up with the idea for a social network idea");
    
} else {
    alert("Not a valid input");
}




  