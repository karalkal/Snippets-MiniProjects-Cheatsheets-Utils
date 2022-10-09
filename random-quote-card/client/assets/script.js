const form = document.querySelector('form')

getRandomQuote()    // start with quote

form.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
  let randID = getRandomNumber()
  if (e) e.preventDefault()   // if invoked by click, prevent default, otherwise it is not needed

  fetch(`http://localhost:3000/quotes/${randID}`)
    .then(resp => resp.json())
    .then(quote => document.getElementById('text').innerHTML = renderQuote(quote))
}

function getRandomNumber(max = 15) {
  let randomNumber = Math.floor(Math.random() * max)
  // console.log(randomNumber)
  return randomNumber
}

function renderQuote(quote) {
  let quoteText = (quote.text).charAt(0).toUpperCase() + (quote.text).slice(1).toLowerCase();
  let quoteAuthor = (quote.author).toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  return `
  <hr>
  <p id="quote-text">&ldquo;${quoteText}&rdquo;</p>
  <p id="quote-author">(${quoteAuthor})</p>
  `
}
