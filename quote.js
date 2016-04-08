
var httpRequest

function makeQuoteRequest () {
  httpRequest = new XMLHttpRequest()
  if (httpRequest) {
    httpRequest.onreadystatechange = updateQuote
    httpRequest.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/', true)
    httpRequest.setRequestHeader('X-Mashape-Key', 'TnKjfyOPmrmshgdTCEM1IBC2GhxJp16X41NjsnzAk2m2PeXlK9')
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    httpRequest.setRequestHeader('Accept', 'application/json')
    httpRequest.send()
  } else {
    fallBackQuote()
  }
}

function updateQuote () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText)
      document.getElementById('quote-box').innerHTML = '<p>"' + response.quote + '"</p>'
      document.getElementById('author-box').innerHTML = '<p>- ' + response.author + '</p>'
    } else {
      fallBackQuote()
    }
  }
}

function fallBackQuote () {
  var quoteObject = quoteArray[Math.floor(Math.random() * quoteArray.length)]
  document.getElementById('quote-box').innerHTML = '<p>' + quoteObject.quote + '</p>'
  document.getElementById('author-box').innerHTML = '<p> - ' + quoteObject.author + '</p>'
}



function prepareTweet () {
  var quoteTweet = document.getElementById('quote-box').innerHTML.replace(/<p>|<\/p>/, '')
  var authorTweet = document.getElementById('author-box').innerHTML.replace(/<p>|<\/p>/, '')
  document.getElementById('tweet-button').setAttribute('data-text', quoteTweet + ' ' + authorTweet)
}
