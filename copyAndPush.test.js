// push to add item to array and return array

const copyAndPush = require('./copyAndPush');

describe('function that returns a new array with all the items in the original array and a new item pushed to the end', () => {
  it('pushes number to end', () => {
    const numbers = [1, 2, 3];

    const name = copyAndPush(numbers, 4);

    expect(name).toEqual([1, 2, 3, 4]);
  });
});
