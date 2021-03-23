//for loop
const capitalizeAndFilter = (arr) => {

  const newArr = [];

  for(let i = 0; i < arr.length; i++) {

    const updated = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    if(updated.charAt(0) !== 'F')
      newArr.push(updated);
  }
  return newArr;
};

module.exports = capitalizeAndFilter;

module.exports = capitalizeAndFilter;

//ARRAY METHODS
const capitalizeAndFilterArrayMethods = (arr) => {

  const capitalize = arr.map(a => a.toUpperCase());
  
  const filtered = capitalize.filter(a => a.charAt(0) !== 'F');
     
  return filtered;
};
    
module.exports = capitalizeAndFilterArrayMethods;