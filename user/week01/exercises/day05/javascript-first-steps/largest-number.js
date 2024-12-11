function findMaxNumber(num1,num2){
    let max=Math.max(num1,num2)
    return max;
}
console.log(findMaxNumber(320,870));

const checkMax1 = findMaxNumber(10, 5);
  console.log('Max Number 1:',checkMax1);

  const checkMax2 = findMaxNumber(10, 15);
  console.log('Max Number 2:',checkMax2);

  const checkMax3 = findMaxNumber(100, 100);
  console.log('Max Number 3:',checkMax3);

  console.assert( checkMax1 === 10, "Ops, was expecting 10, got ", checkMax1);
  console.assert( checkMax2 === 15, "Ops, was expecting 15, got ", checkMax2);
  console.assert( checkMax3 === 100, "Ops, was expecting 100, got ", checkMax3);

  try {
    if ( global ){ global.findMaxNumber = findMaxNumber; }
  } catch(e){}