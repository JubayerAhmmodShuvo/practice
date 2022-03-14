const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
  console.log(countries);
}
loadCountries();
