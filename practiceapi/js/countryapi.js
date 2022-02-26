const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
};
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
 
                <div class="card h-100">
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Country Name: ${country.name.common}</h5>
                        <p>Population: ${country.population}</p>
                        
                </div>
                 
        `;
        countriesDiv.appendChild(div);
    });
};
/* const searchCountry = name => {
    const searchInput = document.getElementById('search');
    const searchResult = searchInput.value;
    searchInput.value = '';

    const url = `https://restcountries.eu/rest/v3/name/${searchResult}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => dis(data));
};
const dis = countries => {
    const countriesDiv = document.getElementById('country');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
 
                <div class="card h-100">
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Country Name: ${country.name.common}</h5>
                        <p>Population: ${country.population}</p>
                    </div>
                </div>
                 
        `;
        countriesDiv.appendChild(div);
    });
}; */
const loadCountryByName = () => {
    const searchInput = document.getElementById('search');
    const searchResult = searchInput.value;
    searchInput.value = '';

    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = '';



    const url = `https://restcountries.com/v3.1/name/${searchResult}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
};
const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country');
    countryDiv.innerHTML = `
    <div class="card mb-3 mx-auto mt-5 h-100 w-50" >
  <div class="row">
    <div class="col-md-4">
      <img src="${country.flags.png}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Country Name: ${country.name.common}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <p class="card-text">Po: ${country.region}</p>
        <p class="card-text">Status: ${country.status}</p>
        <p class="card-text">Capital: ${country.capital}</p>
        <p class="card-text">Capital: ${country.currencies[Object.keys(country.currencies)[0]].name}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


 
  `;
};