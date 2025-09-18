function createGameboard() {
    let gameBoard = [["","",""], ["","",""], ["","",""]];
    let currPlayer = "X";
    let openSpots = 9; // will help track how filled the board is
    // keep track of scores for scoreboard
    let x_score = 0;
    let o_score = 0;
    let win = false;

    const wins = function() {
        // this function iterates through the board to look for any wins 

        // checks for 3 in a row
        for (let r = 0; r < gameBoard.length; r++) {
            if (gameBoard[r][0] == currPlayer && 
                gameBoard[r][1] == currPlayer && gameBoard[r][2] == currPlayer) {
                    return true;
                }
        }
        // checks for 3 in a column
        for (let c = 0; c < gameBoard.length; c++) {
            if (gameBoard[0][c] == currPlayer && 
                gameBoard[1][c] == currPlayer && gameBoard[2][c] == currPlayer) {
                    return true;
                }
        }
        // checking for diagonal wins
        if (gameBoard[0][0] == currPlayer && 
            gameBoard[1][1] == currPlayer && gameBoard[2][2] == currPlayer) {
                return true;
        }
        else if (gameBoard[0][2] == currPlayer && 
            gameBoard[1][1] == currPlayer && gameBoard[2][0] == currPlayer) {
            return true;
        }

        return false;
    }

    const reset = function() {
        // resets game by reseting gameboard
        for (let r = 0; r < gameBoard.length; r++) {
            for (let c = 0; c < gameBoard[r].length; c++) {
                gameBoard[r][c] = "";
            }
        }
        // reset buttons
        let buttons = document.getElementsByClassName("point");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = "";
        }
        win = false;
        openSpots = 9
    }

    const gameStatus = function() {
        // check if currPlayer wins
        // if so display that they win, highlight 3 in a row, wait a few seconds,
        // and clear board

        let container = document.getElementById("scoreboard");
        win = wins();
        if (win == true) {
            // updates the score board and annouce's who won
            // later want the winning tiles to light up / change color
            if (currPlayer == "X") {
                x_score += 1;
            }
            else {
                o_score += 1;
            }
            let score = document.getElementById("score");
            score.firstChild.textContent = `${x_score} : ${o_score}`;
            let annoucement = document.createElement("h2");
            annoucement.textContent = `${currPlayer}'s win!`;
            annoucement.id = annoucement
            container.appendChild(annoucement);
            // wait and then clear board and reset gameboard array
            return;
        }

        if (openSpots != 0){
            //game can continue
            return;
        }
        else {
            // no spots left and neither player has won, game is a tie
            // display that it is a tie, and clear board
            setTimeout(reset, 2000);
        }
    };

    const cellClicked = (row, col) => {
        if (gameBoard[row][col] != "") {
            return;
        }
        gameBoard[row][col] = currPlayer;
        openSpots -= 1
        // check for win somewhere here
        gameStatus();
        if (currPlayer == "X"){
            currPlayer = "O";
        }
        else {
            currPlayer = "X"
        }
    };

    const display = function() {
 
        let container = document.getElementById("game");
        for(let r = 0; r < gameBoard.length; r++) {
            let row = document.createElement("h2");
            row.className = "row";
            // when clicked it will add the players mark
            for(let c = 0; c < gameBoard[r].length; c++) {
                let point = document.createElement("button");
                point.className = "point"

                if (gameBoard[r][c] != "") {
                    point.textContent = gameBoard[r][c];
                }

                point.addEventListener("click", () => {
                    cellClicked(r,c);
                    point.textContent = gameBoard[r][c];
                    if (win == true) {
                        setTimeout(reset, 2000);
                    }
                });
                row.appendChild(point);
            }

            container.appendChild(row);
        }
        // players will also be able to reset the gameboard by pressing a button
        let resetButton = document.createElement("button");
        let options = document.getElementById("options");
        resetButton.textContent = "reset gameboard";
        resetButton.id = "reset";
        resetButton.addEventListener("click", (e) => {
            reset()
        });
        options.appendChild(resetButton);
    };

    return {display};
}

function game() {
    var board = createGameboard();

    return {board}

}
var play = game();
play.board.display();
