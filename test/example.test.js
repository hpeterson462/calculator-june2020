// IMPORT MODULES under test here:
// import example from '../example.js';

//add test
import { add } from '../utilities.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arr1 = 3;
    const arr2 = 4;
    const expected = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(arr1, arr2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 15;
    const arr2 = 5;
    const expected = 20;

    const actual = add(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 25;
    const arr2 = 25;
    const expected = 50;

    const actual = add(arr1, arr2);

    expect.equal(actual, expected);
});


//subtract test
import { sub } from '../utilities.js';

test('time to test a function', (expect) => {

    const arr1 = 4;
    const arr2 = 3;
    const expected = 1;

    const actual = sub(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 10;
    const arr2 = 9;
    const expected = 1;

    const actual = sub(arr1, arr2);

    expect.equal(actual, expected);
})

test('time to test a function', (expect) => {

    const arr1 = 100;
    const arr2 = 98;
    const expected = 2;

    const actual = sub(arr1, arr2);

    expect.equal(actual, expected);
})

//multiply test
import { mul } from '../utilities.js';

test('time to test a function', (expect) => {

    const arr1 = 4;
    const arr2 = 3;
    const expected = 12;

    const actual = mul(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 8;
    const arr2 = 2;
    const expected = 16;

    const actual = mul(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 10;
    const arr2 = 0;
    const expected = 0;

    const actual = mul(arr1, arr2);

    expect.equal(actual, expected);
});


//divide test
import { div } from '../utilities.js';

test('time to test a function', (expect) => {

    const arr1 = 4;
    const arr2 = 4;
    const expected = 1;

    const actual = div(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 40;
    const arr2 = 8;
    const expected = 5;

    const actual = div(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 100;
    const arr2 = 10;
    const expected = 10;

    const actual = div(arr1, arr2);

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const arr1 = 6;
    const arr2 = 3;
    const expected = 2;

    const actual = div(arr1, arr2);

    expect.equal(actual, expected);
})