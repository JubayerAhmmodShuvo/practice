const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showPlayersDetails(data.player));

};
const showPlayersDetails = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
                        <div class="pro-pic">
                            <img class="w-25" src="${player.strThumb}" alt="">
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
    console.log(info);
}