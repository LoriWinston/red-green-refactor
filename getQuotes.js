const fetch = require('node-fetch');

const fetchQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await res.json();

  return body;
};

module.exports = fetchQuotes;
