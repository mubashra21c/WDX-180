

/* Calculator

	Do math with two numbers.

*/

// --- save important DON elements to variables ---

const leftNumberEl = document.getElementById('left');
const rightNumberEl = document.getElementById('right');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = multiply;
const divideButton = divide;

const displayEl = document.getElementById('display-actual');

// --- add event listeners + handlers ---

addButton.addEventListener('click', () => {
	const leftNum = Number(left.value);
  console.log(leftNum);
	const rightNum = Number(right.value);
   console.log(rightNum);
	const sum = leftNum + rightNum;
  console.log(sum);

	displayEl.innerHTML = `${leftNum} + ${rightNum} = ${sum}`;

});

subtractButton.addEventListener('click', () => {
	const leftNum = Number(left.value);
	const rightNum = Number(right.value);

	const difference =leftNum-rightNum ;

		displayEl.innerHTML = `${leftNum} - ${rightNum} = ${difference}`;
});

multiplyButton.addEventListener('click', () => {
	const leftNum = Number(left.value);
	const rightNum = Number(right.value);

	const product = leftNum*rightNum ;;

	displayEl.innerHTML = `${leftNum} * ${rightNum} = ${product}`;
});

divideButton.addEventListener('click', () => {
	const leftNum=Number(left.value);
	const rightNum = Number(right.value);
  const divide = leftNum/rightNum ;;

	displayEl.innerHTML = `${leftNum} / ${rightNum} = ${divide}`;
});
