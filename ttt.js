function createGameboard() {
    // need to account for a player attempting to add a X/O
    // to a spot that already has one
    let gameBoard = [["*","*","*"], ["*","*","*"], ["*","*","*"]];
    const addX = function(row, col) { gameBoard[row][col] = "X"};
    const addO = function(row, col) { gameBoard[row][col] = "O"};
    const display = function() {
        //add event for buttons so that they add the players mark
        let container = document.getElementById("game");
        for(let r = 0; r < gameBoard.length; r++) {
            // may change element type
            let row = document.createElement("h2");
            row.className = "row";
            // may change so that each point on the board is a button
            // when clicked it will add the players mark
            for(let c = 0; c < gameBoard[r].length; c++) {
                let point = document.createElement("button");
                point.className = "point"
                if (gameBoard[r][c] != "*") {
                    point.textContent = gameBoard[r][c];
                }
                row.appendChild(point);
            }
            container.appendChild(row);
        }
    };
    // may add function to play/update display when addX or add0 is used

    return {addX, addO, display};
}

function players(mark) {
    var score = 0;
    //X or O
    const mark = "";
    const displayScore = function() {
        let container = document.getElementById("game");
        let s = document.createElement("h3");
        s.textContent = score;
        container.appendChild(s);
    };
    // change mark for new game
    const changeMark = function(newMark) {
        mark = newMark;
    };
    return {display, changeMark};
}

function game() {
    // for now player 1 will be fixed to only add X's
    // and player 2 will only be able to add O's.
    // later on want the players to be able to choose their own
    const playerOne = players("X");
    const playerTwo = players("O");
    var board = createGameboard();

    const turn = function(player) {
        // displays "X's turn" or "O's turn"

    };
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
play.board.addX(0,0);
play.board.addO(2,1);
