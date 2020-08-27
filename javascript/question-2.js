// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gameInfoContainer = document.querySelector(".container")

async function getGames(){
  try{
    const response = await fetch(url);

    const gamesResults = await response.json();

    const games = gamesResults.results;

    gameInfoContainer.innerHTML = "";

    for(let i = 0; i < games.length; i++){
      if(i === 8){
        break
      }
      gameInfoContainer.innerHTML += 
      `<div class="gameInfo">
        <h2>${games[i].name}</h2>
        <p>Rating: ${games[i].rating}</p>
        <p>Tags: ${games[i].tags.length}</p>
      </div>`
    }
  }
  catch(error) {
    gameInfoContainer.innerHTML = `<div>An error occured.</div>`
  }
};

getGames()