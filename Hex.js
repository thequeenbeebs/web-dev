// Implement the range function from Python in Javascript 

const assert = require('assert');

const range = (num1, num2, step) => {
    //  ERRORS / EDGE CASES
    if (num1 === undefined) {
        throw "range expected at least 1 arguments, got 0"
    } else if (step === 0) {
        throw "range\(\) step argument must not be zero"
    } else if (num2 === 0 && step === undefined) {
        return []
    } 
    
    // EDGE CASE - IF THERE IS ONLY ONE ATTRIBUTE
    if (num2 === undefined) {
        num2 = num1
        num1 = 0
    }

    // EDGE CASE - IF THERE ARE LESS THAN THREE ATTRIBUTES
    if (step === undefined) {
        step = 1
    }
    let rangeArray = []
    
    if (num1 < num2) {
        for (let i = num1; i < num2; i += step) {
          rangeArray.push(i)
        }
    } else {
        for (let i = num1; i > num2; i += step) {
          rangeArray.push(i)
        }
    }
    
    return rangeArray
};

// TEST CASES

// With a single arg (end)
assert.deepStrictEqual(
  range(10),                      // What we are testing
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // What we expect to receive
);

assert.deepStrictEqual(
  range(5),
  [0, 1, 2, 3, 4]
);

assert.deepStrictEqual(
  range(1),
  [0]
);

// With 2 args (start, end)
assert.deepStrictEqual(
  range(0, 5),
  [0, 1, 2, 3, 4]
);

assert.deepStrictEqual(
  range(10, 20),
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
);

// With 3 args (start, end, step)
assert.deepStrictEqual(
  range(0, 20, 2),
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
);

assert.deepStrictEqual(
  range(0, 50, 5),
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45]
);

assert.deepStrictEqual(
  range(1, 5, 3),
  [1, 4]
);

// Empty array cases
assert.deepStrictEqual(
  range(0),
  [ ]
);

assert.deepStrictEqual(
  range(0, 0),
  [ ]
);

assert.deepStrictEqual(
  range(10, 0),
  [ ]
);

// Should throw error
// No args
assert.throws(() => range(), /range expected at least 1 arguments, got 0/, 'did not throw with expected message');
// 0 step
assert.throws(() => range(0, 10, 0), /range\(\) step argument must not be zero/, 'did not throw with expected message');

// Negative step
assert.deepStrictEqual(
  range(10, 0, -1),
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
);
  