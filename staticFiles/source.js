const SIZE = 3;
const gameGrid = [[null, null, null], 
[null, null, null], 
[null, null, null]];


let currentPlayer = 'X';
let player = document.getElementById("player");
let currText = document.getElementById("curr-text");
player.textContent = currentPlayer;
currText.textContent = "Current player: ";
let divs = document.querySelectorAll(".grid-item");
let counter = 0;

function checkWinner(){
    for(let i = 0; i < SIZE; i++){
        if(gameGrid[i][0] != null && gameGrid[i][0] == gameGrid[i][1] && gameGrid[i][0] == gameGrid[i][2]){
            return gameGrid[i][0];
        }

        if(gameGrid[0][i] != null && gameGrid[0][i] == gameGrid[1][i] && gameGrid[0][i] == gameGrid[2][i]){
            return gameGrid[0][i];
        }

        if(gameGrid[1][1] != null && (gameGrid[0][0] == gameGrid[1][1] && gameGrid[1][1] == gameGrid[2][2] || 
                        gameGrid[2][0] == gameGrid[1][1] && gameGrid[1][1] == gameGrid[0][2])){
                return gameGrid[1][1];
        }
    }

    return '-';
}

function removeEventListeners() {
    for(let i=0; i<divs.length; i++) {
        divs[i].removeEventListener("click", handleClick);
    }
}

function declareWinner(winner){
    currText.textContent = "Winner: ";
    player.textContent = winner;
    removeEventListeners();
}

function handleClick(event){
        event.target.textContent = currentPlayer;
        gameGrid[Math.floor(event.target.id / SIZE)][event.target.id % SIZE] = currentPlayer;
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        player.textContent = currentPlayer;
        counter+=1;
        let winner = checkWinner();
        if(winner != '-'){
            declareWinner(winner);
        }
        else if(counter == SIZE * SIZE){
            currText.textContent = "It's a tie!\t";
            player.textContent = "";
        }

}


for(let i=0;i<divs.length;i++) { 
    divs[i].addEventListener("click", handleClick, {once: true});
}