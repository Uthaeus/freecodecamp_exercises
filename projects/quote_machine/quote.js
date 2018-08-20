// Beginning of random quote
const endpoint = 'https://talaikis.com/api/quotes/random/';

function getQuote() {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data.quote, data.author);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function displayQuote(quote, author) {
  const quoteText = document.querySelector('#text');
  quoteText.textContent = quote;
  const authorText = document.querySelector('#author');
  authorText.textContent = author;
  
  const tweet = document.querySelector('#tweet-quote');
  tweet.setAttribute('href', `https://twitter.com/share?text=${quote} - ${author}`);
}

const quoteButton = document.querySelector('.quote-btn');
quoteButton.addEventListener('click', getQuote);

getQuote();
// End of random quote
