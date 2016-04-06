function newQuote() {
  var quoteObject = quoteArray[Math.floor(Math.random() * quoteArray.length)]
  document.getElementById('quote-box').innerHTML = '<p>"' + quoteObject.quote + '"</p>' 
  document.getElementById('author-box').innerHTML = '<p> - ' + quoteObject.author + '</p>'
}

newQuote()
