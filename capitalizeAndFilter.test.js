//push to add item to array and return array FOR LOOP
const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
  it('capitalizes the words', () => {
    const arr = ['fun', 'hello', 'test'];

    const name = capitalizeAndFilter(arr);

    expect(name).toEqual(['HELLO', 'TEST']);
  });
});

//push to add item to array and return array FOR LOOP
const capitalizeAndFilterArrayMethods = require('./capitalizeAndFilter');

describe('function that takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
  it('capitalizes the words WITHOUT A FOR LOOP', () => {
    const arr2 = ['fun', 'hello', 'test'];

    const name = capitalizeAndFilterArrayMethods(arr2);

    expect(name).toEqual(['HELLO', 'TEST']);
  });
});
