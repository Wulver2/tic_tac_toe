function createGameboard() {
    // need to account for a player attempting to add a X/O
    // to a spot that already has one
    let gameBoard = [["*","*","*"], ["*","*","*"], ["*","*","*"]];
    const addX = function(row, col) { gameBoard[row][col] = "X"};
    const addO = function(row, col) { gameBoard[row][col] = "O"};
    const display = function() {
        let container = document.getElementById("container");
        for(let r = 0; r < gameBoard.length; r++) {
            // may change element type
            let row = document.createElement("p");
            for(let c = 0; c < gameBoard[r].length; c++) {
                row.textContent += gameBoard[r][c];
            }
            container.appendChild(row);
        }
    };
    // may add function to play/update display when addX or add0 is used
    
    return {addX, addO, display};
}

var game = createGameboard();
game.display();
game.addX(0,0);
game.addO(2,1);
