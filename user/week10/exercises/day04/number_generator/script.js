// INSERT YOUR CODE HERE

document.body.style.margin = "auto";
document.body.style.width = "50%";

let div1 = document.querySelector(".wrapper");
console.log(div1);
div1.style.display = "grid";
div1.style.gridTemplateColumns = "repeat(6, 1fr)";
div1.style.gap = "10px";

for (let i = 0; i < 102; i++) {
  let div2 = document.createElement("div");
  div2.style.padding = " 15px 10px";
  div2.style.textAlign = "center";
  div2.style.color = "white";
  div2.style.fontWeight='bold';
  div2.style.fontSize='25px';
  div2.textContent = i;
  console.log(div2);
  //checking prime numbers
  let c = 0;
  let num = div2.textContent;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      c++;
      //console.log(c);
    }
  }
  if (c === 2) {
    div2.style.backgroundColor = "#fd5e53";
  }

  //checking even numbers
  else if (div2.textContent % 2 === 0) {
    div2.style.backgroundColor = "#21bf73";
  }
  
  //checking odd numbers
  else {
    div2.style.backgroundColor = "#fddb3a";
  }
  div1.appendChild(div2);
}
document.body.appendChild(div1);
