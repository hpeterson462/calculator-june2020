// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const addButton = document.getElementById('add-button');
// get the add-result span
const addSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
addButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    addSpan.textContent = sum;
});

//get subtract-input-1
const subtractInput1 = document.getElementById('subtract-input-1');

// get subtract-input-2
const subtractInput2 = document.getElementById('subtract-input-2');

//get subtract button
const subtractButton = document.getElementById('subtract-button');

// get the subtract-result span
const subtractSpan = document.getElementById('subtract-result');

// set the event handler to the button
subtractButton.addEventListener('click', () => {
    //get input values
    const value1 = subtractInput1.value;
    const value2 = subtractInput2.value;
    /*subtract input values & convert to numbers*/
    const difference = Number(value1) - Number(value2);
    //update text of span
    subtractSpan.textContent = difference;
})