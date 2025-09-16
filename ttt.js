function createGameboard() {
    let gameBoard = [["*","*","*"], ["*","*","*"], ["*","*","*"]];
    let currPlayer = "X"
    let openSpots = 9; // will help track how filled the board is

    const addX = function(row, col) { 
        gameBoard[row][col] = "X";
        openSpots -= 1;
    };
    const addO = function(row, col) { 
        gameBoard[row][col] = "O";
        openSpots -= 1;
    };
    const cellClicked = (row, col) => {
        if (gameBoard[row][col] != "*") {
            return;
        }
        gameBoard[row][col] = currPlayer;
        // check for win somewhere here
        if (currPlayer == "X"){
            currPlayer = "O";
        }
        else {
            currPlayer = "X"
        }
    }
    const display = function() {
 
        let container = document.getElementById("game");
        for(let r = 0; r < gameBoard.length; r++) {
            let row = document.createElement("h2");
            row.className = "row";
            // when clicked it will add the players mark
            for(let c = 0; c < gameBoard[r].length; c++) {
                let point = document.createElement("button");
                point.className = "point"
                if (gameBoard[r][c] != "*") {
                    point.textContent = gameBoard[r][c];
                }
                point.addEventListener("click", () => {
                    cellClicked(r,c);
                    point.textContent = gameBoard[r][c];
                } )
                row.appendChild(point);
            }
            container.appendChild(row);
        }
    };
    // may add function to play/update display when addX or add0 is used

    return {addX, addO, display};
}

function game() {
    // for now player 1 will be fixed to only add X's
    // and player 2 will only be able to add O's.
    // later on want the players to be able to choose their own
    var board = createGameboard();

    const gameplay = function() {
        // X goes frist, then O. 
        // prevent players from marking same tile
        // check for 3 in a row.
        // repeat until 3 in a row occurs or
        // board is filled
    };
    return {board}

}
var play = game();
play.board.display();
