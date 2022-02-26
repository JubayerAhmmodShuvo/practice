const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data));
}
loadCountries();
const displayCountries = countries => {
    const contriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">show details</button>
        `

        contriesDiv.appendChild(div);
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
  <h5>${country.name.common}</h5>
  <p>${country.population}</p>
  <img src="${country.flags.png}" alt="">
  `;
}