function createGameboard() {
    // need to account for a player attempting to add a X/O
    // to a spot that already has one
    // turn this into a private variable later and add a function to
    // display the board instead
    let gameBoard = [["*","*","*"], ["*","*","*"], ["*","*","*"]];
    const addX = function(row, col) { gameBoard[row][col] = "X"};
    const addO = function(row, col) { gameBoard[row][col] = "O"};
    return {gameBoard, addX, addO};
}

var game = createGameboard();
console.log(game.gameBoard);
game.addX(0,0);
console.log(game.gameBoard);
game.addO(2,1);
console.log(game.gameBoard);
