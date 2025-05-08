// const body=document.querySelector('body');
// console.log(body);
document.body.style.margin="auto";
document.body.style.width="70%";





function changeColor(){
const datetime=document.querySelector('#datetime');
const year=document.querySelector('#year');
datetime.style.width="250px";

const ranCol=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

datetime.style.backgroundColor=ranCol;

year.style.color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

}

setInterval(changeColor,1000);

let currentIndex=1;
const ulElements=document.querySelectorAll('ul li');

ulElements.forEach((ulElement,index)=>{
    ulElement.style.border="2px solid white";
    ulElement.style.padding="10px";
    ulElement.style.fontSize="18px";
    if(index<currentIndex){
        ulElement.style.backgroundColor="#66BB6A";
    }
    else if(index>currentIndex){
        ulElement.style.backgroundColor="#F44336";
    }
    else
    ulElement.style.backgroundColor="#FDD835";

})



