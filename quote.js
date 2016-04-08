// *global new

// function newQuote() {
//   var quoteObject = quoteArray[Math.floor(Math.random() * quoteArray.length)]
//   document.getElementById('quote-box').innerHTML = '<p>'' + quoteObject.quote + ''</p>'
//   document.getElementById('author-box').innerHTML = '<p> - ' + quoteObject.author + '</p>'
// }

// newQuote()

// These code snippets use an open-source library.
// unirest.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies')
// .header('X-Mashape-Key', 'TnKjfyOPmrmshgdTCEM1IBC2GhxJp16X41NjsnzAk2m2PeXlK9')
// .header('Content-Type', 'application/x-www-form-urlencoded')
// .header('Accept', 'application/json')
// .end(function (result) {
//   console.log(result.status, result.headers, result.body)
// })

var httpRequest

function makeQuoteRequest () {

  httpRequest = new XMLHttpRequest()

  if (!httpRequest) {
    console.log('XMLHttpRequest creation failed.');
    return false;
  }

  httpRequest.onreadystatechange = updateQuote

  httpRequest.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com', true)
  httpRequest.setRequestHeader('X-Mashape-Key', 'TnKjfyOPmrmshgdTCEM1IBC2GhxJp16X41NjsnzAk2m2PeXlK9')
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  httpRequest.setRequestHeader('Accept', 'application/json')

  httpRequest.send()

}

function updateQuote () {

  console.log("updateQuote is running:")
  console.log(httpRequest)

  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {

      var response = JSON.parse(httpRequest.responseText)

      console.log(response)

      document.getElementById('quote-box').innerHTML = '<p>"' + response.quote + '"</p>'
      document.getElementById('author-box').innerHTML = '<p>- ' + response.author + '</p>'

    } else {
      console.log('There was a problem with the response.')
    }
  }

}

