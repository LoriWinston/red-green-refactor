const fetchQuotes = require('./getQuotes');

describe('fetchQuotes function', () => {
  it('returns a quote', async() => {

    const quotes = await fetchQuotes();

    expect (quotes[0]).toEqual({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String),
    });
  });
});
