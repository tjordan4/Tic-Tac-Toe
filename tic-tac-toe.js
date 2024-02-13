const player1 = 'x'
const player2 ='o'
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

const state = {
    player1Turn: true,
    board: ["", "", "", "", "", "", "", "", ""], 
}

function render (){
    const cells = document.querySelectorAll(".cell");
    for (i=0; i < state.board.length; ++i) {
        
    }
};

render();