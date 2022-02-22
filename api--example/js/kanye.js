const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => dispalyQuote(data))
}
const dispalyQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}