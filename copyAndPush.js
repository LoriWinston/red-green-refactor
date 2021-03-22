const copyAndPush = (arr, num) => {
  arr.push(num);
  return arr;
};

module.exports = copyAndPush;

const copyAndPushReturnCopy = (arr, num) => {
  const originalArr = arr.slice();
  originalArr.push(num);

  return originalArr;
};

module.exports = copyAndPushReturnCopy;

const copyWithSpread = (arr, num) => {
  const originalArr = arr.slice();
  const combined = [...originalArr, num];

  return combined;
};

module.exports = copyWithSpread;
