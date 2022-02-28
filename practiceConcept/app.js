const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('spinner').style.display = 'block';
    const searchValue = document.getElementById('search-box');
    const searchText = searchValue.value;
    searchValue.value = ``;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showPlayersDetails(data.player));



};
const showPlayersDetails = (players) => {
    if (players) {
        document.getElementById('spinner').style.display = 'none';
    } else {
        document.getElementById('spinner').style.display = 'block';
    }
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
                        <div class="pro-pic">
                            <img class="w-50" src="${player.strThumb}" alt="">
                        </div>
                        <h2>Name:${player.strPlayer}</h2>
                        <h5>Country:${player.strNationality}</h5>

                        <p></p>
                        <div class="allbutton">
                            <button class="btn btn-danger">Delete</button>
                            <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>

                        </div>

                    </div>`;
        parent.appendChild(div);
    }

};
const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data.players[0]));

};

const setDetails = (info) => {
    document.getElementById('details-container').innerHTML = `
  <div>
   <img src="" alt="">
   <h1> Name:${info.strPlayer}</h1>
  </div>  
  `;
};