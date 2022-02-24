const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => dispalyQuote(data))
}
const dispalyQuote = quote => {
    const qu = document.getElementById('quote');
    qu.innerText = quote.quote;
}