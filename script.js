function newQuote() {
  const quotes = [
    ["Believe in yourself", "Unknown"],
    ["Stay hungry, stay foolish", "Steve Jobs"],
    ["Hard work beats talent", "Anonymous"]
  ];

  const r = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[r][0];
  document.getElementById("author").innerText = quotes[r][1];
}

newQuote();