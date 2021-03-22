// push to add item to array and return array

const copyAndPush = require('./copyAndPush');

describe('function that returns a new array with all the items in the original array and a new item pushed to the end', () => {
  it('pushes number to end', () => {
    const numbers = [1, 2, 3];

    const name = copyAndPush(numbers, 4);

    expect(name).toEqual([1, 2, 3, 4]);
  });
});

// return a copy

const copyAndPushReturnCopy = require('./copyAndPush');
describe('return copy', () => {
  it('pushes number to end and returns a copy', () => {
    const numbers = [1, 2, 3];

    const name = copyAndPushReturnCopy(numbers, 4);

    expect(name).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

// return a copy with spread

const copyWithSpread = require('./copyAndPush');

describe('returns a copy with spread', () => {
  it('pushes number to end and returns copy using spread', () => {
    const numbers = [1, 2, 3];
        
    const name = copyWithSpread(numbers, 4);

    expect(name).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
