const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
  
  const allCountriesHTML = countries.map(country => getCountryHTML(country));
 // console.log(allCountriesHTML);
  const container = document.getElementById('countries');
  container.innerHTML = allCountriesHTML.join(' ');
}
const getCountryHTML = country => {
  return `
  <div>
  <h2>${country.name.common}</h2>
  <img src="${country.flags.png}" alt="${country.name.common} flag">
  </div>
  `
}


loadCountries();
