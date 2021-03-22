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

//array method
