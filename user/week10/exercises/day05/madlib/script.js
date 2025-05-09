'use strict';

/* Mad Lib

	This program creates a humorous sentence with the user's suggestions. 

	The sentence is not displayed until all 3 inputs are filled.

*/

// --- save important DON elements to variables ---

const suggestionsForm = document.getElementById('suggestions');
console.assert(suggestionsForm.id === 'suggestions', 'Test 1');

const nounInput = document.getElementById('noun');
console.assert(nounInput.placeholder === 'plural noun', 'Test 2');

const verbInput = document.getElementById('verb');
console.assert(verbInput.type === 'text', 'Test 3');

const adjectiveInput = document.getElementById('adjective');
console.assert(verbInput.nodeName === 'INPUT', 'Test 4');

const displayEl = document.getElementById('display-actual');
console.assert(displayEl.innerText === '', 'Test 5');

// --- add event listeners + handlers ---

suggestionsForm.addEventListener('input', () => {
	// --- read user input ---

	const noun = nounInput.value;
	const verb = verbInput.value;
	const adjective = adjectiveInput.value;

	// --- decide whether to display the sentence ---

	const showSentence = noun !== '' && verb !== '' && adjective !== '';

	// --- update the UI ---

	if (showSentence===true) {
		displayEl.innerHTML = `When the sunset is ${adjective}, ${noun}s always ${verb}.`;
	} else {
		displayEl.innerHTML = '';
	}
});
