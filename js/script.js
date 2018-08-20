// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
    'message': 'Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.',
    'author': 'Brad Henry',
    'tag': 'Family',
    'year_released': '2017'
  },
  {
    'message': 'Life is trying things to see if they work.',
    'author': 'Ray Bradbury',
    'tag': 'Success',
    'year_released': '2016'
  },
  {
    'message': 'Love takes off masks that we fear we cannot live without and know we cannot live within.',
    'author': 'James Baldwin',
    'tag': 'Love',
    'year_released': '2018'
  },
  {
    'message': 'Family is not an important thing. It’s everything.',
    'author': 'Michael J. Fox',
    'tag': 'Family',
    'year_released': '2017'
  },
  {
    'message': 'Success is about creating value.',
    'author': 'Candice Carpenter',
    'tag': 'Success',
    'year_released': '2016'
  },
  {
    'message': 'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.',
    'author': 'Lucille Ball',
    'tag': 'Love',
    'year_released': '2018'
  },
  {
    'message': 'The man of knowledge must be able not only to love his enemies but also to hate his friends.',
    'author': 'Friedrich Nietzsche',
    'tag': 'Friend',
    'year_released': '2016'
  },
  {
    'message': 'We are shaped and fashioned by what we love.',
    'author': 'Johann Wolfgang von Goethe',
    'tag': 'Life',
    'year_released': '2016'
  },
  {
    'message': 'A friend is someone who knows all about you and still loves you.',
    'author': 'Elbert Hubbar',
    'tag': 'Friend',
    'year_released': '2016'
  },
  {
    'message': 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
    'author': 'Rumi',
    'tag': 'Love',
    'year_released': '2018'
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
const getRandomQuote = () => {
  const quotesLength = quotes.length;
  const randomNumber = Math.floor(Math.random() * quotesLength)
  return quotes[randomNumber];
}


// Create the printQuote funtion and name it printQuote
const printQuote = () => {
  const quote = getRandomQuote();
  document.getElementsByClassName('quote')[0].innerHTML = quote.message;
  document.getElementsByClassName('source')[0].innerHTML = quote.author + '<span class="citation"></span><span class="year"></span>';
  document.getElementsByClassName('citation')[0].innerHTML = quote.tag;
  document.getElementsByClassName('year')[0].innerHTML = quote.year_released;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
