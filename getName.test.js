const getName = require('./getName');

describe('getNameFunction', () => {
  it('takes in an object and returns the name of the object', () => {
    const object = { name: 'Greg', age: 22, height: 6 };
    const name = getName(object);
    expect(name).toEqual('Greg');
    
  });
});
  
