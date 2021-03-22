const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('function that takes in an array of strings then capitalizes all strings then filters out any strings starting with the letter f', () => {
  it('capitalizes the words', () => {

    const arr = ['fun', 'circus', 'howdy'];

    const name = capitalizeAndFilter(arr);

    expect(name).toEqual(['Circus', 'Howdy']);
  });
});
