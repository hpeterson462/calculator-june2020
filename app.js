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


//get multiply-input-1
const multiplyInput1 = document.getElementById('multiply-input-1');

//get multiply-input-2
const multiplyInput2 = document.getElementById('multiply-input-2');

//get multiply button
const multiplyButton = document.getElementById('multiply-button');

// get the multiply-result span
const multiplySpan = document.getElementById('multiply-result');

// set the event handler to the button
multiplyButton.addEventListener('click', () => {
    //get input values
    const value1 = multiplyInput1.value;
    const value2 = multiplyInput2.value;
    /*multiply input values & convert to numbers*/
    const product = Number(value1) * Number(value2);
    //update text of span
    multiplySpan.textContent = product;
})


//get divide-input-1
const divideInput1 = document.getElementById('divide-input-1');

//get divide-input-2
const divideInput2 = document.getElementById('divide-input-2');

//get divide button
const divideButton = document.getElementById('divide-button');

// get the divide-result span
const divideSpan = document.getElementById('divide-result');

// set the event handler to the button
divideButton.addEventListener('click', () => {
    //get input values
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;
    /*divide input values & convert to numbers*/
    const quotient = Number(value1) / Number(value2);
    //update text of span
    divideSpan.textContent = quotient;
})