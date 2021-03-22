
function getName(person) {
  return person.name; 
}
 
const getBracketNotation = (object) => {
  return object['name'];
};

const getNameObjectDestructuring = (object) => {
  const { name } = object;
  return name;
};

const getNameObjectDestructuringParameter = ({ name }) => {
  return name;
};


module.exports = getName, getBracketNotation, getNameObjectDestructuring, getNameObjectDestructuringParameter;
