var quoteArray = [{
  "quote": "The pistachio: it's just like our politics. When the two sides are divided, that's when the nuts come out.",
  "author": "Stephen Colbert"
}, {
  "quote": "People usually consider walking on water or in thin air a miracle. But I think the real miracle is not to walk on water or in thin air, but to walk on earth.",
  "author": "Thich Nhat Hanh"
}, {
  "quote": "All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost.",
  "author": "J.R.R. Tolkien"
}, {
  "quote": "Parrots make great pets. They have more personality than goldfish.",
  "author": "Chevy Chase"
}, {
  "quote": "Dying is a wild night and a new road.",
  "author": "Emily Dickinson"
}, {
  "quote": "Always remember that you are absolutely unique. Just like everyone else.",
  "author": "Margaret Mead"
}, {
  "quote": "Life isn't something you possess. It's something you take part in, and you witness.",
  "author": "Louis C. K."
}, {
  "quote": "Kia mate ururoa, kei mate wheke. (Fight like a shark, don’t give in like an octopus.)",
  "author": "Maori Proverb"
}, {
  "quote": "Ahakoa iti, he pounamu. (Although it is small, it is of greenstone.)",
  "author": "Maori Proverb"
}, {
  "quote": "To infinity, and beyond!",
  "author": "Buzz Lightyear"
}]

function newQuote() {
  var quoteObject = quoteArray[Math.floor(Math.random() * quoteArray.length)]
  document.getElementById('quote-box').innerHTML = '<p>"' + quoteObject.quote + '"</p>' 
  document.getElementById('author-box').innerHTML = '<p> - ' + quoteObject.author + '</p>'
}

newQuote()