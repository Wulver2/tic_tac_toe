function createGameboard() {
    // need to account for a player attempting to add a X/O
    // to a spot that already has one
    let gameBoard = [["*","*","*"], ["*","*","*"], ["*","*","*"]];
    const addX = function(row, col) { gameBoard[row][col] = "X"};
    const addO = function(row, col) { gameBoard[row][col] = "O"};
    const display = function() {
        let container = document.getElementById("game");
        for(let r = 0; r < gameBoard.length; r++) {
            // may change element type
            let row = document.createElement("h2");
            row.className = "row";
            // may change so that each point on the board is a button
            // when clicked it will add the players mark
            for(let c = 0; c < gameBoard[r].length; c++) {
                row.textContent += gameBoard[r][c];
            }
            container.appendChild(row);
        }
    };
    // may add function to play/update display when addX or add0 is used

    return {addX, addO, display};
}

function players() {
    var score = 0;
    //X or O
    const mark = "";
    const display = function() {
        let container = document.getElementById("game");
        let s = document.createElement("h3");
        s.textContent = score;
        container.appendChild(s);
    };
    const changeMark = function(newMark) {
        mark = newMark;
    };
    return {display, changeMark};
}

function game() {
    const playerOne = players();
    const playerTwo = players();
}
var board = createGameboard();
board.display();
board.addX(0,0);
board.addO(2,1);
